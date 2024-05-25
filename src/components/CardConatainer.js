import list from '../json/fooditem.json'
import { useState , useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utility/useOnlineStatus'
import UserContext from '../utility/UserContext'
const Card=(details)=>{
    const value=useContext(UserContext)
    const item=details.food
    let img=item.info.cloudinaryImageId
    let name=item.info.name
    let rate=item.info.avgRating;
    let discription=item.info.cuisines
   return ( <div className="m-4 p-4 bg-pink-50 w-60 rounded-lg hover:bg-pink-400 shadow-lg hover:shadow-lg">
            <div className="card-img">
            <img className="rounded-lg h-60" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`}></img>
            </div>
            <div className="name-and-price">
                <div className="font-bold py-4 text-xl">{name}</div>
                <div className="card-price">{rate}</div>
            </div>
            <div className="card-discription">{discription.join(", ")}</div>
            <div className="card-price">{value.loggedIn}</div>
    </div>)
}
let state=false;

// Higher Order Component 

const withPromatedLabel=(Card)=>{
    return (props)=>{
        return (
            <div>
            <label className='absolute bg-black text-white m-2 p-2 rounded-sm'>Best in Town</label>
            <Card {...props}/>
            </div>   
        )
    } 
} 





const CardConatainer=(props)=>{
    const [listitem,setlistitem]=useState([])
    const [filteritem,setfilteritem]=useState([])
    const [searchval,setsearchval]=useState("")
    const value=useContext(UserContext)
    const PermotedCard=withPromatedLabel(Card)
    // console.log("Card Conatiner Rerender")
    useEffect(()=>{
        fetchData();
        // console.log("=======>Use Effect Called")
    },[])
   const fetchData=async ()=>{
    try {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        //  console.log("Api Data",json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        let newItem=json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log("list Item",newItem)
        setlistitem(newItem)
        setfilteritem(newItem)
    } catch (error) {
        // console.log("Something Went Wrong:-",error)
    }
    
   }
   const status=useOnlineStatus()
   if(status==false)return (<Shimmer></Shimmer>)
   if(filteritem.length ==0){
    return <Shimmer/>
   }
    return (
        <div className="card-container-parent">    
        <div className='flex h-16 items-center'>
         <div className='m-4 p-4'>
            <input className='border border-solid border-black' type='text' value={searchval} onChange={(e)=>{
                    setsearchval(e.target.value)
            }}></input>
            <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={()=>{
                let filter=listitem.filter((item)=>{
                           return item.info.name.toLowerCase().includes(searchval.toLowerCase())
                })
                setfilteritem(filter)
            }}>search</button>
            </div> 
            <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={
            ()=>{
                // console.log("Card Conatiner Parent ")
                // const filterOut =()=>{
                //    console.log("state",state)
                   state=!state;
                   let val=state?4.3:0;
              let  filter=listitem.filter((newItems)=>{
                   return newItems.info.avgRating>val
                })
                 setfilteritem(filter)
        //    }
         } }>Top Rated Restaurants</button>   
        </div>
        <div>
            <input className="m-4 p-2 rounded-sm border-black"type='text' value={value.loggedIn} onChange={(e)=>{
                    let x=value.setNewContext(e.target.value)
                   4             // console.log(value)
            }}></input>
        </div>
        <div className="flex flex-wrap">
           {
            filteritem.map((item)=>(
                <Link key={item.info.id} to={'/resturant/'+item.info.id}>
                 {item.info.avgRating>=4.5?<PermotedCard food={item}/>: <Card food={item}/>}  
                    </Link>
            ))
           }
         </div>
        </div>
    )
} 
export default CardConatainer;

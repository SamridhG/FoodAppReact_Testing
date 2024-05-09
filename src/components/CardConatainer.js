import list from '../json/fooditem.json'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
const Card=(details)=>{
    const item=details.food
    let img=item.info.cloudinaryImageId
    let name=item.info.name
    let rate=item.info.avgRating;
    let discription=item.info.cuisines
   return ( <div className="card-parent">
            <div className="card-img">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`}></img>
            </div>
            <div className="name-and-price">
                <div className="card-name">{name}</div>
                <div className="card-price">{rate}</div>
            </div>
            <div className="card-discription">{discription}</div>
    </div>)
}
let state=false;
const CardConatainer=(props)=>{
    const [listitem,setlistitem]=useState([])
    const [filteritem,setfilteritem]=useState([])
    const [searchval,setsearchval]=useState("")
    console.log("Rerender")
    useEffect(()=>{
        fetchData();
        console.log("Use Effect Called")
    },[])
   const fetchData=async ()=>{
    try {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        //  console.log("Api Data",json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        let newItem=json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setlistitem(newItem)
        setfilteritem(newItem)
    } catch (error) {
        console.log("Something Went Wrong:-",error)
    }
    
   }
   if(filteritem.length ==0){
    return <Shimmer/>
   }
    return (
        <div className="card-container-parent">    
        <div className='additional-feature'>
         <button className='top-rated' onClick={
            ()=>{
                console.log("Card Conatiner Parent ")
                // const filterOut =()=>{
                   console.log("state",state)
                   state=!state;
                   let val=state?4.3:0;
              let  filter=listitem.filter((newItems)=>{
                   return newItems.info.avgRating>val
                })
                 setfilteritem(filter)
        //    }
         } }>Top Rated Restaurants</button>  
         <div className='search'>
            <input className='search-bar' type='text' value={searchval} onChange={(e)=>{
                    setsearchval(e.target.value)
            }}></input>
            <button className='search-button' onClick={()=>{
                let filter=listitem.filter((item)=>{
                           return item.info.name.toLowerCase().includes(searchval.toLowerCase())
                })
                setfilteritem(filter)
            }}>search</button>
            </div>  
        </div>
        <div className="card-container">
           {
            filteritem.map((item)=>(
                <Link key={item.info.id} to={'/resturant/'+item.info.id}><Card food={item}/></Link>
            ))
           }
         </div>
        </div>
    )
} 
export default CardConatainer;

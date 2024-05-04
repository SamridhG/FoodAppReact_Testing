import list from '../json/fooditem.json'
import { useState } from 'react'
const Card=(details)=>{
    const item=details.food
   return ( <div className="card-parent">
            <div className="card-img">
            <img src={item.img}></img>
            </div>
            <div className="name-and-price">
                <div className="card-name">{item.name}</div>
                <div className="card-price">{item.price}</div>
            </div>
            <div className="card-discription">{item.description}</div>
    </div>)
}
let state=false;
const CardConatainer=(props)=>{
    //   const list=props.listitems;
    //   console.log(list)
    const [listitem,setlistitem]=useState(list)
    return (
        <div className="card-container-parent" onClick={
            ()=>{
                console.log("Card Conatiner Parent ")
                // const filterOut =()=>{
                   console.log("state",state)
                   state=!state;
                   let val=state?16:0;
              let  filter=list.filter((item)=>{
                   return item.price>val
                })
               
                 setlistitem(filter)
        //    }
         } }
        >    
        <div className="card-container">
           {
            listitem.map((item)=>(
                <Card key={item.id} food={item}/>
            ))
           }
         </div>
        </div>
    )
} 
export default CardConatainer;

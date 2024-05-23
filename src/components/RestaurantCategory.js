import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=(props)=>{
    const [showItems,setshowItems]=useState(false)
    const accordiandata=props.data
    const handleClick=()=>{
       console.log("Clicked")
         setshowItems(!showItems)
    }
    return (
        <div>
            {/*Accordian Header  */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  cursor-pointer">
             <div className="flex justify-between" onClick={handleClick}> 
                <span className="font-bold text-2xl">{accordiandata.title} ({accordiandata.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={accordiandata.itemCards}/>}
           
           
            </div>
            {/* Accordian Body */}
            
        </div>
    )
}

export default RestaurantCategory; 
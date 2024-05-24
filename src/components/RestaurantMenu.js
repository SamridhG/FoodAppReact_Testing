import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { URL } from "../constants/constant";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utility/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
const ResturantMenu=()=>{
    console.log("MENU CARD INVOKED")
    const params=useParams()
    const RestaurantMenuData=useRestaurentMenu(params)
    const [ToShowAccordian,setToShowAccordian]=useState(null)
    console.log("Menu Data",RestaurantMenuData)
   
    if(RestaurantMenuData==null){
        return <Shimmer/>
    }
    const rest_name=RestaurantMenuData.data.cards[2].card.card.info.name
    const rest_cusine=RestaurantMenuData.data.cards[2].card.card.info.cuisines.join()
    const item_cards=RestaurantMenuData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    
    const catogaries=RestaurantMenuData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((node)=>{
        if(node.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") return node
    })
    console.log("items",catogaries)
    // const item_cards=catogaries
   return (<div>
        <div className="font-bold my-10 text-4xl text-center">{rest_name}</div>
        <div className="font-bold text-2xl text-center">{rest_cusine}</div>
        {catogaries.map((catogary,index)=>(
              <RestaurantCategory key={catogary?.card?.card.title} data={catogary?.card?.card} showItems={ToShowAccordian==index?true:false} setToShow={setToShowAccordian} ToShow={ToShowAccordian} index={index}/>
        ))}
        
        {/* <div className="menu-cards">
              {  item_cards.map((item)=>(
                 <MenuCards key={item.card.info.id} cardDetail={item.card.info}/>
              ))
            }
        </div> */}
    </div>)
} 
const MenuCards=(props)=>{
    // console.log(props.cardDetail)
    const item=props.cardDetail;
    const itemname=item.name
    const description=item.description;
    const price=item.finalPrice/100 || item.defaultPrice/100;
    const imgId=item.imageId
         return (
            <div className="menu-card-parent">
                <div className="menu-card-details">
                      <div className="menu-card-item-name">{itemname}</div>
                      <div className="menu-card-item-rating">{description}</div>
                      <div className="menu-card-item-price">Rs:{price}</div>
                </div>
                <div className="menu-card-pic">
                       <img src={URL.MENU_CARD+imgId}></img>
                </div>
            </div>
         )
}

export default ResturantMenu;
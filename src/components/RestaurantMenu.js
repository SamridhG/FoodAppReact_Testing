import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { URL } from "../constants/constant";
import Shimmer from "./Shimmer";
const ResturantMenu=()=>{
    const params=useParams()
    const [RestaurantMenuData,setRestaurantMenuData]=useState(null)
    // console.log("Parameters",params)
    const fetchData=async ()=>{
         try {
            const data=await fetch(URL.RESTURANTDATA+`${params.resId}`+URL.BACK)
            const json=await data.json()
            console.log("DATA==>",json)
            setRestaurantMenuData(json)
         } catch (error) {
            console.log("Error We Get",error)
         }
    }
    useEffect(()=>{
         fetchData()
    },[])
    if(RestaurantMenuData==null){
        return <Shimmer/>
    }
    const rest_name=RestaurantMenuData.data.cards[2].card.card.info.name
    const rest_cusine=RestaurantMenuData.data.cards[2].card.card.info.cuisines.join()
    const item_cards=RestaurantMenuData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    console.log("items",item_cards)
    return (<div className="home-menu">
        <div className="rest-name">{rest_name}</div>
        <div className="rest-cusine">{rest_cusine}</div>
        <div className="menu-cards">
              {  item_cards.map((item)=>(
                 <MenuCards key={item.card.info.id} cardDetail={item.card.info}/>
              ))
            }
        </div>
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
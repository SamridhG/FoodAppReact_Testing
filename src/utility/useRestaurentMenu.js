import { useState,useEffect } from "react"
import { URL } from "../constants/constant"
const useRestaurentMenu=(params)=>{
    const [RestaurantMenuData,setRestaurantMenuData]=useState(null)
   //   console.log("Parameters",params)
    const fetchData=async ()=>{
         try {
            const data=await fetch(URL.RESTURANTDATA+`${params.resId}`+URL.BACK)
            const json=await data.json()
            // console.log("DATA==>",json)
            setRestaurantMenuData(json)
         } catch (error) {
            // console.log("Error We Get",error)
         }
    }
    useEffect(()=>{
         fetchData()
         return ()=>{
            // console.log("unmount")
         }
    },[])
    return RestaurantMenuData;
}
export default useRestaurentMenu;
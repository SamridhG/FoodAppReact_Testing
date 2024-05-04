import React from "react";
import ReactDom from 'react-dom/client'
import MeghnaFood from '../texture/MeghnaFood.jpg'
import CardConatainer from "./components/CardConatainer";
import    HeaderParent  from "./components/HeaderParent";
import MenuText from "./components/MenuText"
import { useState } from 'react'
import list from './json/fooditem.json'
let state=false; 
const AppLayout=()=>{
    //  const [listitem,setlistitem]=useState(list)
     console.log("A State");
    //  const filterOut =()=>{
    //     console.log("state",state)
    //     state=!state;
    //     let val=state?16:0;
    //  filter=list.filter((item)=>{
    //     return item.price>val
    // })
//   setlistitem(filter)
//    } 
    return (
        <div className="app">
            <HeaderParent/>
            <MenuText/>
            {/* event={filterOut} */}
            <CardConatainer/>
            {/* listitems={listitem} */}
        </div>
        
    )
}
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
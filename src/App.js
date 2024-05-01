import React from "react";
import ReactDom from 'react-dom/client'
import MeghnaFood from '../texture/MeghnaFood.jpg'
import list from '../src/json/fooditem.json'
const Logo=()=>{
    return(
        <div className="logo-container">
            <div className="logo-img"></div>
            <div className="logo-name">Chatora Cafe</div>
        </div>
    )
}
const NavBar=()=>{
    return (
        <div className="nav-bar">
            <ul className="nav-option">
                <li>Menu</li>
                <li>Resturant</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
const HeaderParent=()=>{
    return (<div className="header">
<Logo/>
<NavBar/>
    </div>)
}
const MenuText=()=>{
    return (
        <div className="menu-title">
            <div className="title-img"></div>
            <div className="menu">Our Menu</div>
        </div>
    )
}
const Card=(details)=>{
    const item=details.food
    console.log("Details",item)
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

const CardConatainer=()=>{
    return (
        <div className="card-container-parent">
        <div className="card-container">
           {
            list.map((item)=>(
                <Card key={item.id} food={item}/>
            ))
           }
         </div>
        </div>
    )
} 
const AppLayout=()=>{
    return (
        <div className="app">
            <HeaderParent/>
            <MenuText/>
            <CardConatainer/>
        </div>
        
    )
}
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
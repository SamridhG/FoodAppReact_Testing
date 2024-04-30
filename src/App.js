import React from "react";
import { render } from "react-dom";
import ReactDom from 'react-dom/client'
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

const AppLayout=()=>{
    return (
        <HeaderParent/>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
import React from "react";
import ReactDom from 'react-dom/client'
import MeghnaFood from '../texture/MeghnaFood.jpg'
import CardConatainer from "./components/CardConatainer";
import    HeaderParent  from "./components/HeaderParent";
import MenuText from "./components/MenuText"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
const AppLayout=()=>{
     console.log("A State");
    return (
        <div className="app">
            <HeaderParent/>
            <MenuText/>
            <CardConatainer />
        </div>
        
    )
}
const appRouter=createBrowserRouter([
    {
     path:"/",
     element:<AppLayout/>,
     errorElement:<Error/>
    },{
     path:"/about",
     element:<About/>,
    },{
        path:"/contact",
        element:(<>
         <ContactUs/>
         <ContactUs/>
        </>)
       }
])
const root=ReactDom.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter }/>)
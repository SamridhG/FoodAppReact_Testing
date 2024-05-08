import React from "react";
import ReactDom from 'react-dom/client'
import MeghnaFood from '../texture/MeghnaFood.jpg'
import CardConatainer from "./components/CardConatainer";
import    HeaderParent  from "./components/HeaderParent";
import MenuText from "./components/MenuText"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
const AppLayout=()=>{
     console.log("A State");
    return (
        <div className="app">
            {console.log("In Class ")}
            <HeaderParent/>
            <Outlet/>
        </div>
        
    )
}
// const appRouter=createBrowserRouter([
//     {
//      path:"/",
//      element:<AppLayout/>,
//      errorElement:<Error/>
//     },{
//      path:"/about",
//      element:<About/>,
//     },{
//         path:"/contact",
//         element:(<>
//          <ContactUs/>
//          <ContactUs/>
//         </>)
//        }
// ])

// Children  Routing 
const appRouter=createBrowserRouter([
    {
     path:"/",
     element:<AppLayout/>,
     children:[
        { 
            path:'/',
            element:(<>
               <MenuText/>
            <CardConatainer />
            </>)
        },
           {
            path:"/about",
            element:<About/>,
           },
           {
               path:"/contact",
               element:<ContactUs/>
               
            }
     ],
     errorElement:<Error/>
    }
]) 
const root=ReactDom.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter }/>)
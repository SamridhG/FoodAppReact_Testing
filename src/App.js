import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDom from 'react-dom/client'
import MeghnaFood from '../texture/MeghnaFood.jpg'
import CardConatainer from "./components/CardConatainer";
import    HeaderParent  from "./components/HeaderParent";
import MenuText from "./components/MenuText"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";
import UserContext from "./utility/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utility/appStore";
const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
    const [newContext,setnewContext]=useState("Khushboo ji")
    useEffect(()=>{
        setnewContext("Khushboo Gupta")
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedIn:newContext,setNewContext:setnewContext}}>
        <div className="app">
            <HeaderParent/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
               {/* <MenuText/> */}
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
            },
            {
                path:'/resturant/:resId',
                element:<ResturantMenu/>, 
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading UI</h1>}><Grocery /></Suspense>, 
            }             
            
     ],
     errorElement:<Error/>
    }
]) 
const root=ReactDom.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter }/>)
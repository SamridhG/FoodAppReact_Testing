import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
const  appStore=configureStore({
    // add slice 
    reducer:{
        cart:cartReducer,
        user:cartReducer
    }
})

export default appStore;
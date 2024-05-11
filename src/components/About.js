import { useEffect } from "react";
import UserClass from "./UserClass";
const About=()=>{
    console.log("About Constructor")
    useEffect(()=>{
        console.log("About Use effect")
    })
   return (
    <div className="error">
        <UserClass name={"Samridh"}/> 
        <UserClass name={"Khushboo"}/> 
        {/* {console.log("About Render")}
        <Testing></Testing>
        <Testing></Testing> */}
    </div>
   )
}

const Testing=()=>{
    console.log("Testing Constructor")
    useEffect(()=>{
        console.log("Testing use effect")
    },[])
    return (console.log("Return Testing"))
}
export default About; 
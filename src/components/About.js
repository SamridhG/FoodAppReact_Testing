import { useEffect, useState } from "react";
import UserClass from "./UserClass";
const About=()=>{
    console.log("About Constructor")
    useEffect(()=>{
        console.log("About Use effect")
    },[])
   return (
    <div className="error">
        {/* <UserClass name={"Samridh"}/>  */}
        {/* <UserClass name={"Khushboo"}/>  */}
        <Testing></Testing>
    </div>
   )
}

const Testing=()=>{
    console.log("Testing Constructor")
    const [Count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Testing use effect",Count)

        return ()=>{
            console.log("State Value",Count)
        }
    },[Count])
    return (
        <div>
            <div>Count:{Count}</div>
        <button onClick={()=>{
            setCount(Count+1);
        }}>Click Me </button>
        </div>
        
    )
}
export default About; 
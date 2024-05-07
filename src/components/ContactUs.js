import { useRouteError } from "react-router-dom"
const ContactUs=()=>{
    const error=useRouteError();
    console.log("err",error)
    return (
        <div className="error">
            <h1>{console.log("Hello")}Contact Us</h1>
        </div>
    )
}
export default ContactUs
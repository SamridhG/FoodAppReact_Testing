import { useRouteError } from "react-router-dom"
const Error=()=>{
    const error=useRouteError();
    console.log("err",error)
    return (
        <div className="error">
            <h1>Opps Error Occurs</h1>
        </div>
    )
}
export default Error
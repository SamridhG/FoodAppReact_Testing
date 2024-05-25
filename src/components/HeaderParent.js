import { Link } from "react-router-dom"
import useOnlineStatus from "../utility/useOnlineStatus"
import { URL } from "../constants/constant"
import { useContext } from "react"
import UserContext from "../utility/UserContext"
import { useSelector } from "react-redux"
const Logo=()=>{
    return(
        <div className="flex">
            <div className="logo-img">
                <img className="w-30" src={URL.LOGO}></img>
            </div>
            <div className="flex justify-center items-center text-3xl">Chatora Cafe</div>
        </div>
    )
}
const NavBar=()=>{
    const status=useOnlineStatus();
    const value=useContext(UserContext)
    const cart=useSelector((store)=>{
        // console.log("Store",store)
        return store.cart.items})
    // console.log("Cart",cart)
    return (
        <div className="flex items-center">
            <ul className="flex p-4 m-4 text-3xl">
                <li className="px-4">Online:{status.toString()}</li>
                <li className="px-4"><Link to="/">Menu</Link></li>
                <li className="px-4">Resturant</li>
                <li className="px-4">Cart - {cart.length}</li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">{value.loggedIn}</li>
            </ul>
        </div>
    )
}
const HeaderParent=()=>{
    return (<div className="flex justify-between m-2 shadow-lg">
<Logo/>
<NavBar/>
    </div>)
}
export default HeaderParent;
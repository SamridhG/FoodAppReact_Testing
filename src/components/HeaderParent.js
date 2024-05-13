import { Link } from "react-router-dom"
import useOnlineStatus from "../utility/useOnlineStatus"
const Logo=()=>{
    return(
        <div className="logo-container">
            <div className="logo-img"></div>
            <div className="logo-name">Chatora Cafe</div>
        </div>
    )
}
const NavBar=()=>{
    const status=useOnlineStatus();
    console.log("Status:",status)
    return (
        <div className="nav-bar">
            <ul className="nav-option">
                <li>Online:{status.toString()}</li>
                <li><Link to="/">Menu</Link></li>
                <li>Resturant</li>
                <li>Service</li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
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
export default HeaderParent;
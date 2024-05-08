import { Link } from "react-router-dom"
const Logo=()=>{
    return(
        <div className="logo-container">
            <div className="logo-img"></div>
            <div className="logo-name">Chatora Cafe</div>
        </div>
    )
}
const NavBar=()=>{
    return (
        <div className="nav-bar">
            <ul className="nav-option">
                <li><Link to="/">Menu</Link></li>
                <li>Resturant</li>
                <li>Service</li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
import { useContext } from "react"
import { URL } from "../constants/constant"
import UserContext from "../utility/UserContext"
const ItemList=({items})=>{
    // const name=item.card.info.name
    // const price=item.card.info.name/100
    // const imageId=item.card.info.imageId
    // const description=item.card.info.description
    // console.log(items)
    const value=useContext(UserContext)  
    return (<div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="my-2 p-2 border-b-2">
                     <div className="flex justify-between">
                        <div>
                        <div className="text-lg font-bold">{item.card.info.name}</div>
                        <div className="text-lg font-bold">₹ {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</div>
                        <p>
                     {item.card.info.description}
                     </p>
                     <span>{value.loggedIn}</span>
                        </div>
                        <img className="w-3/12 border-r-2" src={URL.MENU_CARD+item.card.info.imageId}></img>
                     </div>
                    
                </div>
            ))}
    </div>)
}
export default ItemList
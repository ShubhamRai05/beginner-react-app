import { CDN_URL } from "./config";
import { useContext } from "react";
import UserContext from "./context/userContext";



const RestaurantCard = function (props) {
    const { name,     cuisines, locality, cloudinaryImageId, avgRating, costForTwo  , powered} = props
    const {user} = useContext(UserContext)
    console.log(user);
    // console.log(props);
    return ( 
        <div className="w-96  h-[500px] border-solid border-2 border-purple-950 text-center overflow-hidden ">     
            <img src={CDN_URL  + cloudinaryImageId} className="h-3/5 self-center w-full object-cover" />
            <div className="mt-2">
            <h2 className="font-bold">{name}</h2>        
            <p className="font-light">{cuisines.slice(0, 3).join(", ")}</p>  
            <h4>{locality}</h4>
            <h4 className="text-orange-500">{avgRating} stars</h4>
            <h4 className="font-mono">{costForTwo}</h4>   
            <h4 className="font-mono"><span className="font-mono font-bold ">Powered BY </span>:{powered}</h4>   
            <h4>{user.email } <span className="font-semibold text-2xl">{user.name}</span> </h4>

            </div>  
        </div>             
    )    
}
     
export default RestaurantCard;      
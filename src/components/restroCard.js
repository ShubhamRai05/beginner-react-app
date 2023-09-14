import { CDN_URL } from "./config";

const RestaurantCard = function (props) {

    const { name,     cuisines, locality, cloudinaryImageId, avgRating, costForTwo } = props
    return ( 
        <div className="w-96  h-full border-solid border-2 border-purple-950 text-center overflow-hidden">     
            <img src={CDN_URL  + cloudinaryImageId} className="h-3/4 self-center w-full object-cover" />
            <div className="mt-2">
            <h2 className="font-bold">{name}</h2>        
            <p className="font-light">{cuisines.slice(0, 3).join(", ")}</p>  
            <h4>{locality}</h4>
            <h4 className="text-orange-500">{avgRating} stars</h4>
            <h4 className="font-mono">{costForTwo}</h4>   
            </div>  
        </div>             
    )    
}
     
export default RestaurantCard;      
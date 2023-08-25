import { CDN_URL } from "./config";

const RestaurantCard = function (props) {

    const { name, cuisines, locality, cloudinaryImageId, avgRating, costForTwo } = props
    return (
        <div className="cards">
            <img src={CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines}</p>
            <h4>{locality}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;
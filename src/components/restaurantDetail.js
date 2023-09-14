import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CDN_URL } from "./config"
import ShimmerComponent from "./shimmer"
import useRestaurantDetail from "./hooks/useRestaurantDetail"

const RestaurantDetail = () => {

    const { restaurantID } = useParams()
    const restaurantDetail = useRestaurantDetail(restaurantID)
    console.log(restaurantDetail);

    // creating hook for checking online status of the user
    return (!restaurantDetail) ? <ShimmerComponent /> : (
        <>
            <img src={CDN_URL + restaurantDetail.cloudinaryImageId} className="w-full object-cover h-96" />
            <div className="text-center absolute top-48 left-0 right-0 bottom-0">
                <h1 className="font-bold text-3xl">{restaurantDetail.name}</h1>
      
                
            </div>

        </>
    )
}

export default RestaurantDetail



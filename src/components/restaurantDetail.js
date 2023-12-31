import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CDN_URL } from "./config"
import ShimmerComponent from "./shimmer"
import useRestaurantDetail from "./hooks/useRestaurantDetail"

const RestaurantDetail = () => {

    const { restaurantID } = useParams()
    const restaurantDetail = useRestaurantDetail(restaurantID)
 
    // creating hook for checking online status of the user
    return (!restaurantDetail) ? <ShimmerComponent /> : (
        <>
            <img src={CDN_URL + restaurantDetail.cloudinaryImageId} className="w-full object-cover h-96" />
            <div className="text-center absolute top-48 left-0 right-0 bottom-0">
                <h1 className="font-bold text-3xl">{restaurantDetail.name}</h1>
                <h2 className="text-3xl ">{restaurantDetail.costForTwoMessage}</h2>
                <h3 className=" text-2xl ">{restaurantDetail.areaName}</h3>
                <h3 className=" font-extrabold text-gray-950 text-4xl">{restaurantDetail.city}</h3>

      
                
            </div>

        </>
    )
}

export default RestaurantDetail



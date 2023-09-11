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
            <h1>{restaurantDetail.name}</h1>
            <h2>id : {restaurantID}</h2>
            <img src={CDN_URL + restaurantDetail.cloudinaryImageId} />
        </>
    )
}

export default RestaurantDetail



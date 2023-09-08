import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CDN_URL } from "./config"
import ShimmerComponent from "./shimmer"

const RestaurantDetail = () => {

    const { restaurantID } = useParams()
     const [restaurantDetail , setRestaurantDetail] = useState(null)

    async function getRestaurantDetail(){
            let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1122286&lng=72.8873623&restaurantId=" + restaurantID)
            let response = await data.json()   
            setRestaurantDetail(response?.data?.cards[0]?.card?.card?.info)
            console.log(response?.data?.cards[0]?.card.card.info)
             // console.log(response?.data) 

    }
    useEffect(() => {
        getRestaurantDetail()
    }, []) 
    
    return (!restaurantDetail) ? <ShimmerComponent/>:(
        <>
            <h1>{restaurantDetail.name}</h1>
            <h2>id : {restaurantID}</h2>
            <img src={CDN_URL + restaurantDetail.cloudinaryImageId }/>
         </>
    )
}

export default RestaurantDetail



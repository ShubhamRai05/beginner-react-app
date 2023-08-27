import { restaurantCardData } from "./config";  //because we are using api of swiggy
import RestaurantCard from "./restroCard";
import { useState, useEffect } from "react";
import { filterData } from "./config";
import ShimmerComponent from "./shimmer";

const BodyComponent = function () {
    const [searchText, setSearchText] = useState("")
    let [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        console.log("i am useEffect`"); 
        // api call
        getRestaurant()
    }, [])

   async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        // console.log(response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        let restaurantData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestaurant(restaurantData)
        console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
     return (restaurant.length ===0)?<ShimmerComponent/> : (
        <>
            <input type="text" className="search-input" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />


            <button onClick={(e) => {
                console.log("am called")
                let data = filterData(restaurant, searchText)

                setRestaurant(data)

            }} >Search</button>

            <div className="restaurant-list">
                {restaurant.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro?.info?.id} />
                })}
            </div></>

    )
}

export default BodyComponent
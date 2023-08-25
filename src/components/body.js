import { restaurantCardData } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { filterData } from "./config";

const BodyComponent = function () {
    const [searchText, setSearchText] = useState("")
    let [restaurant, setRestaurant] = useState(restaurantCardData)
    let [tracker, setTracker] = useState(0)
    // let [incrementNumber, setIncrementNumber] = useState(10)

    useEffect(() => {
        console.log("i am useEffect`");
        // api call
        getRestaurant()
    }, [])

   async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        // console.log(response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        setRestaurant(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
        console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log("render");
    return (
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
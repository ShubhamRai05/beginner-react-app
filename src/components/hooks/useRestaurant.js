import { useState, useEffect } from "react";


const useRestaurant = (data) => {
    const [allRestaurants, setAllRestaurant] = useState([])
    let [filteredRestaurant, setfilteredRestaurant] = useState([])

    useEffect(() => {
        // api call
        getRestaurant()
    }, [], () => {
        console.log("kill netork request here");
    })


    // fetching api
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        let restaurantData = await response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestaurant(restaurantData)
        setfilteredRestaurant(restaurantData)

        // console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    return allRestaurants, filteredRestaurant
}
export default useRestaurant
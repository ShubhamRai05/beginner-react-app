import { restaurantCardData } from "./config";  //because we are using api of swiggy
import RestaurantCard from "./restroCard";
import { useState, useEffect } from "react";
import { filterData } from "./config";
import ShimmerComponent from "./shimmer";

const BodyComponent = function () {

    // local variables
    const [allRestaurants, setAllRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    let [filteredRestaurant, setfilteredRestaurant] = useState([])



    useEffect(() => {
        console.log("i am useEffect`");
        // api call
        getRestaurant()
    }, [])


    // fetching api
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        // console.log(response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        if(!response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle){
            return <h1>Please refresh the page</h1>
        }
        let restaurantData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestaurant(restaurantData)
        setfilteredRestaurant(restaurantData)

        // console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }

    if (!allRestaurants) {
        return <h1>Still rendering</h1>
    }

    const renderinResults = ()=>{
        if(filteredRestaurant.length ===0){
            return alert("No search Result")
        }
    }

    console.log("render")
    // rendering component
    return (allRestaurants.length === 0) ? <ShimmerComponent /> : (
        <>
            <input type="text" className="search-input" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)

            }} />
            <button onClick={() => {

                console.log("am called1")
                let data = filterData(allRestaurants, searchText)

                setfilteredRestaurant(data)
                renderinResults


            }}>Search</button>

            <div className="restaurant-list">
                {filteredRestaurant.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro?.info?.id} />
                })}
            </div></>

    )
}

export default BodyComponent  
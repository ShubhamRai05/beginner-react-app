

//     // fetching api
//     async function getRestaurant() {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//         const response = await data.json()
//         // console.log(response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
//         let restaurantData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         setAllRestaurant(restaurantData)
//         setfilteredRestaurant(restaurantData)

//         // console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
//     }

// export  default getRestaurant
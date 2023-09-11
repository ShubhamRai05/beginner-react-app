import { useEffect, useState } from "react"

const useRestaurantDetail = (restaurantID) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null)

    useEffect(() => {
        getRestaurantDetail()
    }, [])

    async function getRestaurantDetail() {
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1122286&lng=72.8873623&restaurantId=" + restaurantID)
        let response = await data.json()
        setRestaurantDetail(response?.data?.cards[0]?.card?.card?.info)
        console.log(response?.data?.cards[0]?.card.card.info)
        // console.log(response?.data) 

    }
   
    return restaurantDetail
}

export default useRestaurantDetail
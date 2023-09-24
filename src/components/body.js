import { restaurantCardData } from "./config";  //because we are using api of swiggy
import RestaurantCard from "./restroCard";
import { useState, useEffect, useContext } from "react";
import { filterData } from "./utils/helper.js";
import ShimmerComponent from "./shimmer";
import { Link } from "react-router-dom";
import useUserStatus from "./hooks/useUserStatus";
import UserContext from "./context/userContext";




const BodyComponent = function (props) {
    const { poweredBy } = { props }.props.copyright
    // const {copyright:coPoweredBy} = props
    // console.log(coPoweredBy);
    // local variables
    const [allRestaurants, setAllRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    let [filteredRestaurant, setfilteredRestaurant] = useState([])
    const isOnline = useUserStatus()
    const { user, setUser } = useContext(UserContext)




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
        if (!response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle) {
            return <h1>Please refresh the page</h1>
        }

        let restaurantData = await response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestaurant(restaurantData)
        setfilteredRestaurant(restaurantData)

        // console.log(response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }

    if (!allRestaurants) {
        return <h1>Still rendering</h1>
    }

    const renderinResults = () => {
        if (filteredRestaurant.length === 0) {
            return alert("No search Result")
        }
    }

    // cheecking user Status
    if (!isOnline) {
        return <h1>Ooops something went wrong</h1>
    }

    console.log("render")
    // rendering component
    return (allRestaurants.length === 0) ? <ShimmerComponent /> : (
        <>
            <div className="flex justify-center gap-2 bg-slate-500 h-20  items-center mt-4">
                <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-60 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Search here" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)

                }} />
                <button className="bg-slate-600 p-3 rounded-xl text-slate-300  self-center  w-28" onClick={() => {

                    console.log("am called1")
                    let data = filterData(allRestaurants, searchText)

                    setfilteredRestaurant(data)
                    renderinResults


                }}>Search</button>

                <input type="text" onChange={e => {
                setUser({
                    ...user,
                    name:e.target.value,
                })

                }}  value={user.name}/>

                <input type="text" onChange={e => {
                setUser({
                    ...user,
                    email:e.target.value,
                })

                }}  value={user.email}/>
            </div>
            <div className="flex flex-wrap gap-7 w-full mt-12 justify-evenly ">
                {filteredRestaurant.map((restro) => {
                    return (<Link to={"/restaurant/" + restro?.info?.id} key={restro?.info?.id}><RestaurantCard {...restro.info} powered={poweredBy} /></Link>)
                })}
            </div>
        </>

    )
}

export default BodyComponent  
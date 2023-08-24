import { restaurantCardData } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { filterData } from "./config";

const BodyComponent = function () {
    const [searchText, setSearchText] = useState("")
    let [restaurant, setRestaurant] = useState(restaurantCardData)
    // let [incrementNumber, setIncrementNumber] = useState(10)
    return (
        <>
            <input type="text" className="search-input" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            {/* just for practice */}
            {/* <h1>{incrementNumber}</h1>
            <button onClick={() => {
                setIncrementNumber(incrementNumber++)

            }}>Increment number</button>
            <button onClick={
                ()=>{
                    setIncrementNumber(incrementNumber--)
                }
            }>Decrement Number</button> */}

            <button onClick={(e) => {
                let data = filterData(restaurant, searchText)
                setRestaurant(data)
            }} >Search</button>

            <div className="restaurant-list">
                {restaurant.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro.info.id} />
                })}
            </div></>

    )
}

export default BodyComponent
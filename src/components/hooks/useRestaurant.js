// // useRestaurantData.js

// import { useState, useEffect } from "react";

// function useRestaurantData() {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchRestaurantData() {
//       try {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1122286&lng=72.8873623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         const response = await data.json();

//         if (!response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle) {
//           throw new Error("Data not found");
//         }

//         const restaurantData = response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//         setAllRestaurants(restaurantData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     }

//     fetchRestaurantData();
//   }, []);

//   return {
//     allRestaurants,
//     loading,
//   };
// }

// export default useRestaurantData;

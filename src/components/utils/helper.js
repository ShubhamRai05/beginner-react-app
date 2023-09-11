export  function filterData(restaurant, searchText ) {
     
    let data = restaurant.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) )
    
    return data;

}
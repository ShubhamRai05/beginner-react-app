const title = <h1 className="logo">FoodMania</h1>


const HeaderComponent = function () {
    return (
        <div className="header">
            {title}
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>


    )
}

export default HeaderComponent
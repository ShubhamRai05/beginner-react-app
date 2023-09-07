import { useEffect, useState } from "react"
import logo from "./assets/img/logo.jpg"
import { Link } from "react-router-dom"
const Title = () => {
  // const [title, setTitle] = useState("FoodMania")


  return (
    <>
      <img src={logo} className="logo"/>
    </>

  )

}


const HeaderComponent = function () {

  const [authentication, setAuthentication] = useState(true)


  return (
    <div className="header">
      <Title />
      <ul className="nav-list">
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to="/about">
      <li>About Us</li>
      </Link>

        <Link to="/contact">Contact Us</Link>
        <li>Cart</li>
      </ul>
      {authentication ? <button onClick={() => {
        setAuthentication(false)
      }}>Login</button> : <button onClick={() => {
        setAuthentication(true)
      }}>Logout</button>}
    </div>


  )
}

export default HeaderComponent
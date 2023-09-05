import { useEffect, useState } from "react"
import logo from "./assets/img/logo.jpg"

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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
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
import { useEffect, useState , useContext} from "react"
import logo from "./assets/img/logo.jpg"
import { Link } from "react-router-dom"
import UserContext from "./context/userContext"
const Title = () => {
  // const [title, setTitle] = useState("FoodMania")


  return (
    <>
      <img src={logo} className="w-36 m-5" />
    </>

  )

}


const HeaderComponent = function () {
  const user = useContext(UserContext)
  console.log(user);

  const [authentication, setAuthentication] = useState(true)


  return (
    <div className="flex justify-between bg-slate-200 overflow-hidden h-36 ">
      <Title />
      <ul className="flex justify-between gap-6 m-5 self-center">
        <Link to="/">
          <li className="text-3xl text-slate-500 hover:first-letter:text-slate-700  hover:duration-500">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-3xl  text-slate-500 hover:first-letter:text-slate-700  hover:duration-500">About Us</li>
        </Link>
        <Link to="/form">
          <li className="text-3xl  text-slate-500 hover:first-letter:text-slate-700  hover:duration-500">Login Form</li>
        </Link>
        <Link to="/offers">
          <li className="text-3xl  text-slate-500 hover:first-letter:text-slate-700  hover:duration-500">Offers</li>
        </Link>

        <Link to="/contact">
          <li className="text-3xl  text-slate-500 hover:first-letter:text-slate-700  hover:duration-500">Contact Us</li>
        </Link>
        <li className="text-3xl  text-slate-500 hover:first-letter:text-slate-700  hover:duration-500" >Cart</li>
      </ul>
      <h4>{user.owner}</h4>
      <h4>{user.name}</h4>
      
      {authentication ? <button className="bg-slate-600 p-3 rounded-xl text-slate-300   self-center  mr-10" onClick={() => {
        setAuthentication(false)
      }}>Login</button> : <button className="bg-slate-600 p-3 rounded-xl text-slate-300  self-center  mr-10" onClick={() => {
        setAuthentication(true)
      }}>Logout</button>}
    </div>


  )
}

export default HeaderComponent
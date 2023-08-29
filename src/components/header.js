import { useState } from "react"


const title = () => {
  const [title, setTitle] = useState("FOODMANIA")
  return(   
    <>      
      <h1 className="logo">{title}</h1>
     
    </>
 
  ) 

}
 

const HeaderComponent = function () {

  const [authentication, setAuthentication] = useState(true)


  return (
    <div className="header">
      {title()}
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
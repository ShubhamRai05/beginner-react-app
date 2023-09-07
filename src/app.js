import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import BodyComponent from "./components/body";
import FooterComponent from "./components/footer";
import About from "../src/components/about"
import Contact from ".//components/contact"
import Error from "./components/error";
import {RouterProvider , createBrowserRouter} from "react-router-dom"
   


const AppLayout = function () {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </>


    )
}

const appRouter = createBrowserRouter([
    {
        path:"//" ,
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"//about",
        element:<About/>
    }
    ,
    {
        path:"/contact",
        element:<Contact/>
    }
    ,
    {
        path:"*",
        element:<Error/>
    }
])



const rootJS = document.querySelector("#root")
const root = ReactDOM.createRoot(rootJS)
root.render(<RouterProvider router={appRouter}/>)

import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import BodyComponent from "./components/body";
import FooterComponent from "./components/footer";
import About from "../src/components/about"
import Contact from ".//components/contact"
import Error from "./components/error";
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import { Outlet } from "react-router-dom"; //helps in managing the routes by having constant header and footer it accepts childrens
   


const AppLayout = function () {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>


    )
}

const appRouter = createBrowserRouter([
    {
        path:"/" ,
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<About/>
            }
            ,
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
    
])



const rootJS = document.querySelector("#root")
const root = ReactDOM.createRoot(rootJS)
root.render(<RouterProvider router={appRouter}/>)

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import BodyComponent from "./components/body";
import FooterComponent from "./components/footer";
import About from "../src/components/about"
import Contact from ".//components/contact"
import Error from "./components/error";
import { RouterProvider, createBrowserRouter, Form } from "react-router-dom"
import { Outlet } from "react-router-dom"; //helps in managing the routes by having constant header and footer it accepts childrens
import RestaurantDetail from "./components/restaurantDetail";
import LoginForm from "./components/form";
import HumanResource from "./components/ProfileClass";
import ShimmerComponent from "./components/shimmer";
// import Offers from "./components/offers";

// lazy loading our Offers components
const Offers = lazy(()=>import("./components/offers"))

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
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            }
            ,
            {
                path: "/contact",
                element: <Contact />,

                children: [
                    {
                        path: "hr",
                        element: <HumanResource />
                    }
                ]
            }
            ,
            {
                path: "/restaurant/:restaurantID",
                element: <RestaurantDetail />
            },
            {
                path: "/form",
                element: <LoginForm
                />
            },
            {
                path:"/offers",
                element:<Suspense fallback={<ShimmerComponent/>}><Offers/></Suspense>
            }
        ]
    }

])



const rootJS = document.querySelector("#root")
const root = ReactDOM.createRoot(rootJS)
root.render(<RouterProvider router={appRouter} />)

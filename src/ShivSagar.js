import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import BodyComponent from "./components/body";
import FooterComponent from "./components/footer";

const AppLayout = function () {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </>


    )
}

const rootJS = document.querySelector("#root")
const root = ReactDOM.createRoot(rootJS)
root.render(<AppLayout />)

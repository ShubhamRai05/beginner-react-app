import { Link, Outlet } from "react-router-dom"
import HumanResourceClassBased from "./ProfileClass";
import HumanResource from "./hr";
import { Component } from "react";

// const Contact = ()=>{

//     return (
//         <>
//         <h1>Contact us Page</h1>
//         <Link to="hr">Contact Hr</Link>
//         {/* <Outlet/> */}
//         <HumanResourceClassBased name={"shubham"} womens={"surbhi"} />
//         <HumanResource props={"functionalComponent"}/>

//         </>
//     )
// }

// export default Contact;

class Contact extends Component {
    constructor(props) {
        super(props)

        // console.log("Parent - Contructor");
    }


     componentDidMount() {
        // console.log("Parent - componentDidMount");
     

    }

    render() {
        // console.log("Parent - Render");
        return (
            <>
                <h1>Contact us Page</h1>
                {/* <Link to="hr">Contact Hr</Link> */}
                {/* <Outlet/> */}
                {/* <HumanResourceClassBased name={"first child"} /> */}
                {/* <HumanResource props={"functionalComponent"}/> */}

            </>
        )
    }
}
export default Contact;

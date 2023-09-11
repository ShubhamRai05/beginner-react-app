import { useState } from "react";

const HumanResource = ({props}) => {

    const [count, setCount] = useState(0)
    return (
        < div className="profileFunction">
            <h2>THis is my profile based functional component</h2>
            <h2>{count}</h2>
            <h2>{props}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>increase count</button>
        </div>

    )
}
export default HumanResource;
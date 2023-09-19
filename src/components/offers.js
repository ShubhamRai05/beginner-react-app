import { useState } from "react"

const Section = ({ description, title }) => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>
            <h1>{title}</h1>
            {
                isVisible ? (<button className="border-black bg-slate-400 text-slate-900 m-1 rounded-md" onClick={()=>{
                    setIsVisible(false)
                }}>Hide</button>) : (<button className="border-black bg-slate-400 text-slate-900 rounded-md" onClick={()=>{
                    setIsVisible(true)
                 }}>Show</button>)


            }

            {isVisible && <p>{description}</p>}

        </>
    )
}

const Offers = () => {
    return (
        <>

            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer One"} />
            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30  lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer Two"} />
            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer Three"} />
        </>
    )
}

export default Offers
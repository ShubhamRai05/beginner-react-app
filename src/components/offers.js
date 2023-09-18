import { useState } from "react"


const Section = ({ description, title }) => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>
            <h1 className="text-2xl font-bold">{title}</h1>
            {isVisible && <p>{description}</p>}

            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 m-6" onClick={() => {
                setIsVisible(true)

            }}>Show</button>

            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                onClick={() => {
                    setIsVisible(false)
                }}>Hide</button>

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
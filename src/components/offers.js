import { useState } from "react"

const Section = ({ description, title, isVisible, setIsVisible }) => {
    console.log(isVisible, setIsVisible);
    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            {
                isVisible ? (<button className="border-black bg-slate-400 text-slate-900 m-3 rounded-md p-2" onClick={() => {
                    setIsVisible(false)
                }}>Hide</button>)
                    :
                    (<button className="border-black bg-slate-400 text-slate-900 rounded-md m-3 p-2" onClick={() => {
                             setIsVisible(true)

                     }}>Show</button>)


            }

            {isVisible && <p>{description}</p>}

        </>
    )
}

const Offers = () => {
    const [visibleSection, setIsVisibleSection] = useState("Offer-Two")

    return (
        <>

            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer-One"}
                isVisible={visibleSection === "Offer-One"}
                setIsVisible={() => {
                    setIsVisibleSection("Offer-One")
                
                }}
            />

            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30  lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer-Two"}

                isVisible={
                    visibleSection === "Offer-Two"
                }

                setIsVisible={() => {
                    setIsVisibleSection("Offer-Two")

                }}
            />


            <Section description={"lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30"} title={"Offer-Three"}

                isVisible={visibleSection === "Offer-Three"}
                setIsVisible={() => {
                    setIsVisibleSection("Offer-Three")
                }}
            />
        </>
    )
}

export default Offers
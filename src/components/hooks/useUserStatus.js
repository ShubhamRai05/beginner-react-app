import { useEffect, useState } from "react"

const useUserStatus = () => {
    const [userOnline, setUserOnline] = useState(true)

    useEffect(() => {
        window.addEventListener("online", () => {
            setUserOnline(true)
        })
        window.addEventListener("offline", () => {
            setUserOnline(false)
        })
    }, [])
    return userOnline;
}

export default useUserStatus
import { useEffect, useState } from "react"

const useUserStatus = () => {
    const [userOnline, setUserOnline] = useState(true)

  
    useEffect(() => {
        const handleOnline = () => {
            setUserOnline(true)
        }
        const handleOffline = () => { 
            setUserOnline(false)
        }
    
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])
    return userOnline;
}

// always do cleanup of event listeners


export default useUserStatus
import { useRouteError } from "react-router-dom"


const Error = () => {
    const err = useRouteError()
    console.log(err);
    const { status: errorCode, statusText: errorMessage, data: message } = err

    return (
        <>
            <h1>{errorMessage} , {message}</h1>
            <h2>{errorCode}</h2>  {/* Used  this to display the errors */}
            
         <h1>error</h1>  {/* Used this for universal path "*" */}
        </>
    )
}

export default Error;
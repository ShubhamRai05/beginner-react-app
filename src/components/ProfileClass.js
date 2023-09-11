import React from "react"


class HumanResource extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            login: "shubham",
            imageURL: "not yet loaded",
            githubRepo: 23,
            count:1
        }
        console.log("child contructor", this.props.name)
    }

    async componentDidMount() {
        console.log("child - componentDidMount", this.props.name);
        // let data = await fetch("https://api.github.com/users/ShubhamRai05")
        // let response = await data.json()
        // console.log(response)
        // this.setState(response)
        // this.timer = setInterval(() => {
        //     console.log("i am set interval");
        // }, 1000);
    }

    componentWillUnmount() {
        console.log("dont worry i have unmounted that guy");
        clearInterval(this.timer)
    }
    componentDidUpdate(){
        console.log(" stop updating me");
    }
    render() {
        console.log("child render", this.props.name);
        const { login: name, imageURL, githubRepo , count} = this.state
        return (<>
            <div className="profile">
                <h2>This is my profile class based Component </h2>
                <h2>{name}</h2>
                <h2>{githubRepo}</h2>
                <h2>{count}</h2>
                <button onClick={()=>{
                   this.setState({
                        count:count+ 1
                    })
                }}>increment to see componentDidUpdate</button>

            </div>

        </>
        )

    }
}

export default HumanResource;
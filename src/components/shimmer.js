import shimmerLoadingAnimation from '../../assets/shimmer-loading-animation.gif'

// const ShimmerComponent = () => {
//     return (<img src={shimmerLoadingAnimation} className="shimmer" />
//     )
// }

// creating shimmer ui
const ShimmerComponent = () => {
    return (
        <>
            <div className='shimmer-list'>
              {Array(24).fill("").map((e,index)=><div key={index} className='shimmer-card'></div>)}  
            </div>
        </>
    )
}
export default ShimmerComponent       
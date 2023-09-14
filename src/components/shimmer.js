import shimmerLoadingAnimation from '../../assets/shimmer-loading-animation.gif'

// const ShimmerComponent = () => {
//     return (<img src={shimmerLoadingAnimation} className="shimmer" />
//     )
// }

// creating shimmer ui
const ShimmerComponent = () => {
    return (
        <>
            <div className='flex flex-wrap gap-3 justify-center mt-4 mb-5'>
              {Array(24).fill("").map((e,index)=><div key={index} className='w-36 h-56 bg-slate-400'></div>)}  
            </div>
        </>
    )
}
export default ShimmerComponent       
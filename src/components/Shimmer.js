
const ShimmerCard=()=>{
    return (<div className="shimmer-card-parent">

    </div>)
}
const Shimmer=()=>{
    return (<div className="shimmer-card-container-parent">    
    <div className="shimmer-card-container">
       
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
         
       
     </div>
    </div>
)
}
export default Shimmer
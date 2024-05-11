import React from "react";
class UserClass extends React.Component{
   constructor(props){
    super(props);
    console.log(props.name+"Constructor")
    this.state={
        count:0,
    }
   }
   componentDidMount(){
    console.log(this.props.name+"===Component Did Mount===")
   }
//    componentDidUpdate(){
//     console.log("Component updatedS")
//    }
//    componentWillUnmount(){
//     console.log("UnMound")
//    }
    render(){
        console.log(this.props.name+"reder functoon")
       return (
         <div>
            <h2>Samrdih</h2>
            <h3>Count:{this.state.count}</h3>
            <button onClick={()=>{
                console.log("Increase")
                this.setState({
                    count:this.state.count+1,
                }) 
            }}>Click Me</button>
            <h3>Location</h3>
            <h4>Conatct</h4>
            {/* <Test name={this.props.name+"1"}></Test>
            <Test name={this.props.name+"2"}></Test> */}
        </div>
    );
    }
}
// class Test extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props.name+"Test Cosntructor")
//     }
//     componentDidMount(){
//         console.log(this.props.name+"test did mount")
//     }
//     render(){
//         console.log(this.props.name+"test render")
//         return (<div></div>)
//     }
// }
export default   UserClass;
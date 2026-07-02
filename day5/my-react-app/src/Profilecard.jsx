
function Profilecard(props){
    return(<div className = "container">
        <div className ="yo">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Branch:{props.branch}</p>
    </div>
    </div>)
    
}
export default Profilecard
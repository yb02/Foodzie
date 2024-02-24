import {useState,useEffect} from "react";
import Cards from './Cards'



function Body(props){
    return(
        <div style={{backgroundColor:"black"}}>
        <div className="row  ">
        {props.buttonState.map((restaurant) => (
          <div className="col-md-3 my-3  d-flex justify-content-evenly" key={restaurant.info.id}>
            <Cards  resData={restaurant} />
          </div>
        ))}
          </div>
          </div>
    )
    
}
export default Body
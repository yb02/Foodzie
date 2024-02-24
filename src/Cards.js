
import cards from './cards.css'

function Cards(props) {
   
//    const{data} = resData
   const{name,cuisines,cloudinaryImageId,avgRating} = props.resData.info
  return (
    <>
            <div className="card" style={{width: "18rem"}}>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}  className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h6 className="card-title" >{name}</h6>
                <p className="card-cuisine" style={{fontStyle: "italic"}}>{cuisines.join(",")}</p>
                <p className="card-rating">{avgRating}⭐</p>
                <p className="card-cost"></p>
                {/* <p className="card-del-time">{deliveryTime} mins</p> */}
            </div>
            </div>
    
    </>
  )
}

export default Cards
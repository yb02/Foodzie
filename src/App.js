import {useEffect, useState} from "react"
import Navbar from "./Navbar"
import Body from "./Body"





function App() {
  useEffect(()=>{
    fetchdata()
  }
  ,[])

  const fetchdata=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.352384&lng=74.7867838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json()
    const info=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    setResList(info)
  }
  
  const[resList,setResList] = useState([])
  console.log(resList)

  function handleOnClick(){
      setResList(t = resList.filter((res) => res.info.avgRating>4))
      console.log(resList)
    }
  return (
    <>
      <Navbar onButtonClick={handleOnClick}/>
      <Body buttonState={resList}/>
    </>
  )
}

export default App
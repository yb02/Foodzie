import {useState,useEffect} from 'react'
import navbar from './navbar.css'
import photo from "../Images/FoodZie-1.png"



function Navbar(props) {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"black"}}>
      <div className="container-fluid" >
        <img className="logo-img"alt="Logo" src={photo}></img>
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About Us</a>
            </li>

          </ul>
          <div className="fil-button" style={{margin:"10px"}}>
            <button className='mx-3' onClick={props.onButtonClick}>Top Rated Restraunts</button>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
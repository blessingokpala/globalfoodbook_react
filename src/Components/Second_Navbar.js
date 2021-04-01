import React from 'react';
import ReactDom from 'react-dom';
import style from "../Components/MainCss/Second_Navbar.css";
import youtube from "../../src/images/youtube.png";
import pinterest from "../../src/images/pinterest.png";
import instagram from "../../src/images/instagram.png";
import facebook from "../../src/images/facebook.png";
import twitter from "../../src/images/twitter.png";
import { Link } from "react-router-dom";



function Second_Navbar() {
  return (
    <div className="second_navbar">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <div className="social">
            <a className="social_image" href="https://www.youtube.com/channel/UClN1MbLOaWn5jiyWUrHaugA?sub_confirmation=1" target="_blank"><img src={youtube} alt="youtube" height="40" width="40"/></a>
            <a className="social_image" href="https://www.pinterest.co.uk/globalfoodbook/" target="_blank"><img src={pinterest} alt="pinterest" height="40" width="40"/></a>
            <a className="social_image" href="https://www.instagram.com/globalfoodbook/" target="_blank"><img src={instagram} alt="instagram" height="40" width="40"/></a>
            <a className="social_image" href="https://www.facebook.com/globalfoodbook" target="_blank"><img src={facebook} alt="facebook" height="40" width="40"/></a>
            <a className="social_image" href="https://twitter.com/globalfoodbook" target="_blank"><img src={twitter} alt="twitter" height="40" width="40"/></a>
        </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
    </nav>
    </div>
  )
}

export default Second_Navbar

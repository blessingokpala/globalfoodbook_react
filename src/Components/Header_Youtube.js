import React from 'react';
import ReactPlayer from "react-player";
import style from "../Components/MainCss/Header_Youtube.css";

function Header_Youtube() {
  return (
    <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
      <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/oEjq2w4vLHg"
        allowfullscreen></iframe>
    </div>
    </div>

    
  )
}

export default Header_Youtube

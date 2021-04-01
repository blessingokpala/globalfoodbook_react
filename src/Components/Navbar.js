import React from 'react'
import logo from "../../src/images/gfb-main-logo-2020.png";
import styles from "../Components/MainCss/Navbar.css";

function Navbar() {
    return (
    <div id="menu_area" className="menu-area">
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-light navbar-expand-lg mainmenu fixed-top">
            <a className="navbar-brand" to="/"><img src={logo} alt="gfb" height="90" width="90"/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                        
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recipes</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                            <li className="dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Types</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="#">Breakfast</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Lunch</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Dinner</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="#">Main</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Snack</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Salad</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Dessert</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Starter</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cuisines</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="#">Asia</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Europe</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">African</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">American</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Australia</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Middle East</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Skills Level</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="#">Easy</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Beginner</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Advanced</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#">Expert</a></li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li><a href="#">Kid's Corner</a></li>
                        <li><a href="#">Food Processing</a></li>
                        <li><a href="#">Gardening</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
)  
}

export default Navbar

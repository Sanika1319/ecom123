import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Nav.css';
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react"
import light from '../img/contrast_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import dark from '../img/brightness_2_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';


function Nav() {
   const {theme ,setTheme} = useContext(ThemeContext);
  console.log(theme);
  let myStyle ={};
  if(theme === 'light'){
    myStyle ={
      background : '#f23232ff',
      color: '#000000'
 
    }
  }
  else{
     myStyle ={
      background : '#b51aedff',
      color: '#eee6e6ff'

    }

  }
  return (<>
    <header>
    <nav className="navbar navbar-expand-lg " style={myStyle} >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🛍️ MyProduct
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-3" >
          <li className="nav-item">
            <Link className="nav-link active" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Products
            </Link>
          </li>
          <li>
            {
              theme === 'light' ? 
              (
                <img src={dark} onClick={()=> setTheme('dark')}/>
              )
              :
              (
                <img src={light} onClick={()=> setTheme('light')}/>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  );
}

export default Nav;

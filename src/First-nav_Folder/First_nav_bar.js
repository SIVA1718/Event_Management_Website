import React, { useRef, useState } from "react";
import './App.css'
import "https://kit.fontawesome.com/e7d3dcf2c0.js" 
function First_nav_bar() {
  let toggleFun = () => {
      let secEle = document.querySelector('#toggle-section');
      let crossEle = document.querySelector('#cross-bar')
      secEle.classList.toggle('toggle-active');
}
 
    return (
      <>
         <nav className="First__nav">
            <div>
              <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Opening Hours</a></li>
                <li><a href="#CONTACT">Contact Me</a></li>
              </ul>
            </div>
            <div>
                <ul>
                  <li>Share:</li>
                  <li><a href="#"><i className="fa-solid fa-at"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>


            <i className="fa-solid fa-bars toggle"  id="togggle-bar" onClick={toggleFun}></i>

            <div className="toggle-menu" id="toggle-section">
                <i class="fa-solid fa-xmark cross" onClick={toggleFun} id="cross-bar"></i>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Opening Hours</a></li>
                <li><a href="#">Contact Me</a></li>
                <div>
                  <span>Share:</span>
                  <span><a href="#"><i className="fa-solid fa-at"></i></a></span>
                  <span><a href="#"><i className="fa-brands fa-facebook"></i></a></span>
                  <span><a href="#"><i className="fa-brands fa-twitter"></i></a></span>
                </div>
            </div>
         </nav>
      </>
    );
  }
  
  export default First_nav_bar;
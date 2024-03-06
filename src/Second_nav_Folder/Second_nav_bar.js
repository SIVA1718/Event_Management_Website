import React from "react"
import './Second_nav_styles.css';
let Second_nav_bar = () => {
    return(
    <React.Fragment>
        <nav className="second_nav">
            <div className="second-nav-1">
                 Eventuros
            </div>
            <div className="second-nav-2">
                 <i class="fa-solid fa-phone"></i><span className="phone_num">075420 28806</span>
                 <i class="fa-solid fa-calendar-days"></i>
                 <span id="forEnvelop"><i class="fa-solid fa-envelope"></i><span className="envelop_msg">Send Message</span></span>
            </div>
        </nav>
    </React.Fragment>     
    )
}
export default Second_nav_bar;
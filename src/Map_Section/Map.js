import React from "react";
import './Map.css';
let Map = () => {
    return(
        <React.Fragment>
            <div className="Map_Sec">
                <div>Areas Covered</div>
                <p>Pan India</p>
            </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d115124.77587359611!2d85.04740628166795!3d25.61656909979868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.6165922!2d85.1298078!5e0!3m2!1sen!2sin!4v1709724480766!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </React.Fragment>
    )
}
export default Map;
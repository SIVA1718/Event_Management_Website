import React from "react";
import './Contact.css';
let Contact = () =>{

    return(
        <React.Fragment>
            <div className="contact_sec" id="CONTACT">
                <p>Contact Me</p>
                <div>
                 <i class="fa-solid fa-location-dot"></i><span>Eventuros 103 Dhruv Ganga Enclave Rd Number-23Sri Krishna NagarPatnaBihar800001</span>
                </div>
                <div>
                <i class="fa-solid fa-phone"></i> <span>075420 28806</span>
                </div>
                <div>
                <i class="fa-solid fa-envelope"></i> <span>nishat.websitesdevelopers@gmail.com</span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contact;
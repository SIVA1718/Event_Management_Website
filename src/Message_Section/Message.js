import React from "react";
import  './Message.css';
let Message = () => {
    return(
        <React.Fragment>
            <div className="Message_heading">
                <div>Send a Message</div>
                <p>An email will be sent to the owner</p>
            </div>
            <div className="Message_section">
                <div className="Message_sec_1">
                        <textarea rows={6} cols={25} placeholder="Tell About Your Self"></textarea>
                </div>

                <div className="Message_sec_2">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="number" placeholder="Your Phone Number"/>
                </div>
                <div className="Message_sec_3">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">I agree with the <a href="#">Terms & Conditions</a> and the <a href="#">Privacy & Cookies Policy </a> of UENI and any applicable Terms and Conditions of Eventuros. This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#"> Terms of Service</a> apply.</label>
                </div>
            </div>
            <div className="send_msg">
                <a>Send Message</a>
            </div>
           
        </React.Fragment>
    )
}
export default Message;
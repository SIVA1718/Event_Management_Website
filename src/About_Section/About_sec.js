import React from "react";
import './About.css';
import img1 from './About_img_1.png'
import img2 from './About_img_2.png'
import img3 from './About_img_3.png'
let About_sec = () => {
    return(
        <React.Fragment>
           <div className="About_Section_1">
                <div className="About_1_1">

                        <h2>First-Rate Event Planner in Patna</h2>
                    
                        <p>Whether you’re a seasoned event planner or putting together an event for the first time, professional event dressers can go a long way to making sure that your event is the best it can be. At Eventuros, we are able to decorate small and large-scale events down to the minute details, meticulously designing your venue to make sure that your special day or night runs without a hitch. If you need experienced event dressers around Patna with an eye for detail, please get in touch on 7542028806.</p>
                </div>
                <div className="About_1_2">
                        <img src={img1}/>
                </div>
           </div>

           <div className="About_Section_2">
                <div className="About_2_1">

                    <img src={img2}/>
                </div>
                <div className="About_2_2">
                    <h2>Our Event Planning Services</h2>
                        
                    <p>There’s no aspect of event planning that we’re not able to cover. Our event planning expertise covers venue sourcing, food, beverages and hospitality, entertainment booking, budgeting, equipment sourcing, invite management and more, meaning you can rest easy with the knowledge that your event logistics are in our trusted hands.</p>
                </div>
           </div>

           <div className="About_Section_1">
                <div className="About_1_1">

                        <h2>Competitive prices</h2>
                        <p>We aim to keep our rates rates extremely competitive so that you can afford to throw the best party possible. After paying a small deposit, you can hire our services and equipment hourly or by the day, and we also offer pick-up and drop-off services so you have one less problem to worry about! Please get in touch to find out more about our rates and services for your specific needs.</p>    
                        
                </div>
                <div className="About_1_2">
                        <img src={img3}/>
                </div>
           </div>
           
        </React.Fragment>
    )

}
export default About_sec;
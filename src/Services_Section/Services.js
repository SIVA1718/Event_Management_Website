import React from "react"
import './Services.css';
import img1 from './Services_img_1.webp';
import img2 from './Services_img_2.jpg';
import img3 from './Services_img_3.jpg';
import img4 from './Services_img_4.webp';
import img5 from './Services_img_5.jpg';
import img6 from './Services_img_6.jpg';
let Services = () => {

    return(
        <React.Fragment>
              <div className="Services_sec">
                <figure>
                        <img src={img1} />
                        <figcaption>
                            <p>Corporate Event Planning</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
                <figure>
                        <img src={img2} />
                        <figcaption>
                            <p>Social Event Planning</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
                <figure>
                        <img src={img3} />
                        <figcaption>
                            <p>Product Launch Event Planning</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
                <figure>
                        <img src={img4} />
                        <figcaption>
                            <p>Wedding Event Planning</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
                <figure>
                        <img src={img5} />
                        <figcaption>
                            <p>Stage Decoration</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
                <figure>
                        <img src={img6} />
                        <figcaption>
                            <p>Sound & Light Equipments</p>
                            <a href="#">Book</a>
                        </figcaption>
                </figure>
              </div>
        </React.Fragment>
    )
}
export default Services;
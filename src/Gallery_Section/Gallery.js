import React from "react";
import './Gallery.css';
import img1 from './Gallery_image_1.png';
import img2 from './Gallery_image_2.png';
import img3 from './Gallery_image_3.png';
import img4 from './Gallery_image_4.png';
import img5 from './Gallery_image_5.png';
let Gallery = () => {

    return(
        <React.Fragment>

            <div className="Gallery_Sec">
                <h1>Gallery</h1>
            </div>
          
             <div className=" Gallery_Sec">
             <div className="container">
                    <div className="Img-container">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img1} />
                        <img src={img3} />
                    </div>
               </div>    
            </div>         
                        
                        
                    
              
        </React.Fragment>
    )

}
export default Gallery;
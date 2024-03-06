import './Section_03.css';
import React from 'react';
import backgroundImage from './Background_image.png';


let Section_03 = () => {

    return(
        <React.Fragment>
           
           <img src={backgroundImage} className='section_03_img'/>
        </React.Fragment>
    )

}
export default Section_03;
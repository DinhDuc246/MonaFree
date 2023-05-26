import React, { Children } from 'react'
import "./Slide.scss";
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsCroll }) => {

    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsCroll={arrowsCroll}  > {children}


                </Slider>
            </div>
        </div>
    );
};

export default Slide
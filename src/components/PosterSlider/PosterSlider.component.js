import React, { Fragment } from 'react';
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

// config 
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

const PosterSlider = (props) => {
    return (
        <Fragment>
            <div className="flex flex-col items-start">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </Fragment>
    );
};
export default PosterSlider;
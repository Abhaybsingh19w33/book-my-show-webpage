import React, { Fragment } from 'react';
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

// config   
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
    // if config is not passed using props then default config will be used
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
    return (
        <Fragment>
            {/* flex - to align the items in same row */}
            {/* flex-col - stacking divs upon each other */}
            {/* items-start - aligning them left */}
            <div className="flex flex-col items-start">
                {/* text-2xl - set text to 2 extra lareg */}
                {/* font-bold - seting fold to bold */}
                {/* p-2 - set padding by 2 unit from all sides */}
                {/* if isdark is true it will be set to white otherwise gray */}
                <h3 className={`text-2xl font-bold p-2 ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                {/* text-sm - set text to small */}
                {/* if isdark is true it will be set to white otherwise gray */}
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>
            <Slider {...sliderConfig}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </Fragment>
    );
};
export default PosterSlider;
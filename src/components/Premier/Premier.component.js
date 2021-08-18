import React, { Fragment } from 'react';
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

// config 
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

export const Premier = () => {

    return (
        <Fragment>
            <div className="flex flex-col items-start">
                <h3 className="text-white text-xl font-bold">Premiers</h3>
                <p className="text-white text-sm">Brand new release every friday</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {PremierImages.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </Fragment>
    );
};

export default Premier;
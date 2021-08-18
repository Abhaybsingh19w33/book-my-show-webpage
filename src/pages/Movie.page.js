import React, { Fragment } from 'react';

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// config 
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
    return (
        <Fragment>
            <div>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-mugen-train-et00313314-30-07-2021-05-14-22.jpg"/>
            </div>
        </Fragment>
    );
}

export default Movie;
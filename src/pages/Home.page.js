import React, { Fragment } from 'react';

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from '../components/Premier/Premier.component';

const HomePage = () => {
    return (
        <Fragment>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
                <Premier />
            </div>
        </Fragment>
    );
};

export default HomePage;
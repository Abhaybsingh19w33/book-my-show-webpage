import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };

        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);

    return (
        <Fragment>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 my-3">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="hidden md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider
                            images={popularMovies}
                            title="Premiers"
                            subtitle="Brand new releases every friday"
                            isDark={true}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider
                    images={topRatedMovies}
                    title="Online Streaming Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider
                    images={upcomingMovies}
                    title="Outdoor Events"
                    isDark={false}
                />
            </div>
        </Fragment >
    );
};

export default HomePage;
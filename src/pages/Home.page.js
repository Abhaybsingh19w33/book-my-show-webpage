import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const HomePage = () => {
    // using hooks to store state and change the state
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
            {/* flex - to align the items in same row */}
            {/* flx-col to stack divs upon one another */}
            {/* gap-10 - to provide 3 uint gap between 2 divs */}
            <div className="flex flex-col gap-10">
                {/* container */}
                {/* mx-auto auto margin from left and right */}
                {/* px-4 padding left and right by 4 */}
                <div className="container mx-auto px-4">
                    {/* text-2xl - to set text size to 2xl */}
                    {/* font-bold - set font to bold */}
                    {/* text-gray-800 - set text color to gray */}
                    {/* my-3 -  margin from top and bottom */}
                    <h1 className="text-2xl font-bold text-gray-800 my-3">
                        The best of Entertainment
                    </h1>
                    {/* main EntertainmentCardSlider*/}
                    <EntertainmentCardSlider />
                </div>
                {/* py-12 - padding from top and bottom to 12 unit */}
                <div className="bg-bms-800 py-12">
                    {/* container */}
                    {/* mx-auto auto margin from left and right */}
                    {/* px-4 padding left and right by 4 */}
                    {/* flex - align items in same row */}
                    {/* flx-col to stack divs upon one another */}
                    {/* gap-3 - to provide 3 uint gap between 2 divs */}
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        {/* hidden - hidden in xs to md */}
                        <div className="hidden md:flex">
                            {/* w-full width set to full */}
                            {/* h-full height set to full */}
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        {/* PosterSlider */}
                        {/* passing api images as prop */}
                        <PosterSlider
                            images={popularMovies}
                            title="Premiers"
                            subtitle="Brand new releases every friday"
                            isDark={true}
                        />
                    </div>
                </div>
            </div>
            {/* container  */}
            {/* mx-auto auto margin from left and right */}
            {/* px-4 padding left and right by 4 */}
            {/* my-8 - margin 8 units from top and bottom */}
            <div className="container mx-auto px-4 my-8">
                {/* PosterSlider */}
                {/* passing api images as prop */}
                <PosterSlider
                    images={topRatedMovies}
                    title="Online Streaming Events"
                    isDark={false}
                />
            </div>
            {/* container  */}
            {/* mx-auto auto margin from left and right */}
            {/* px-4 padding left and right by 4 */}
            {/* my-8 - margin 8 units from top and bottom */}
            <div className="container mx-auto px-4 my-8">
                {/* PosterSlider */}
                {/* passing api images as prop */}
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
import React, { Fragment, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

// Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//icons 
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// context
import { MovieContext } from "../context/movie.context";

const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };

        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(
                `/movie/${id}/recommendations`
            );
            setRecommended(getRecommendedMovies.data.results);
        };

        requestRecommendedMovies();
    }, [id]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Fragment>
            <MovieHero />
            {/* container */}
            {/* my-12 - margin of 122 units from top and bottom */}
            {/* px-4 - padding from left and right by 4 unit */}
            {/* lg:ml-20 - for large screens margin of 20 unit from left */}
            {/* lg:w-2/3 it will take 75% of screen in lg */}
            <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
                {/* flex - to align the items in same row */}
                {/* flex-col - stacking divs upon each other */}
                {/* items-start - aligning them left */}
                {/* gap-3 - gap of unit 3 */}
                <div className="flex flex-col items-start gap-3">
                    {/* text-gray-800 set text color to gray */}
                    {/* font-bold - set font to bold */}
                    {/* text-2xl - set text to 2 extar large */}
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>{movie.overview}</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    {/* text-gray-800 set text color to gray */}
                    {/* font-bold - set font to bold */}
                    {/* text-2xl - set text to 2 extar large */}
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable offers
                    </h2>
                    {/* flex - to align the items in same row */}
                    {/* flex-col - stacking divs upon each other */}
                    {/* gap-3 - gap of unit 3 */}
                    {/* lg:flex-row - for large screen align divs in queue */}
                    <div className="flex flex-col gap-3 lg:flex-row">
                        {/* flex - to align the items in same row */}
                        {/* items-start - aligning them left */}
                        {/* gap-2 - gap of unit w */}
                        {/* bg-yellow-100 - bg color to yellow */}
                        {/* p-3 set padding from all sides */}
                        {/* border-yellow-400 - set border color to yellow */}
                        {/* border-dashed - set border decoration dashed */}
                        {/* border-2 border width to 2 */}
                        {/* rounded-md edges to rounded */}
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            {/* flex - to align the items in same row */}
                            {/* flex-col - stacking divs upon each other */}
                            {/* items-start - aligning them left */}
                            <div className="flex flex-col items-start">
                                {/* text-gray- 700 set text color to gray */}
                                {/* font-bold - set font to bold */}
                                {/* text-xl - set text to extra large */}
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                                    Stream.
                                </p>
                            </div>
                        </div>
                        {/* flex - to align the items in same row */}
                        {/* items-start - aligning them left */}
                        {/* gap-2 - provide 2 unit of gap */}
                        {/* bg-yellow-100 - bg color to yellow */}
                        {/* p-3 - set padding unit 3 from all sides */}
                        {/* bg-yellow-400 - bg color to yellow */}
                        {/* border-dashed - border decoration dashed */}
                        {/* border-2 - border wodth 2 px */}
                        {/* rounded-md - edges rounded */}
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            {/* flex - to align the items in same row */}
                            {/* flex-col - stacking divs upon each other */}
                            {/* items-start - aligning them left */}
                            <div className="flex flex-col items-start">
                                {/* text-gray- 700 set text color to gray */}
                                {/* font-bold - set font to bold */}
                                {/* text-xl - set text to extra large */}
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">
                                    Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                                    Pass @Rs.99
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    {/* text-gray- 700 set text color to gray */}
                    {/* font-bold - set font to bold */}
                    {/* text-2xl - set text to extra large */}
                    {/* mb-4 - margin of 4 unit in bottom */}
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & crew</h2>
                    {/* Slider */}
                    <Slider {...settingsCast}>
                        {cast.map((castdata) => (
                            // Cast carousel
                            <Cast
                                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                castName={castdata.original_name}
                                role={castdata.character}
                            />
                        ))}
                    </Slider>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={similarMovies}
                        title="You Might Also like"
                        isDark={false}
                    />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={recommended}
                        title="BMS XCLUSIVE"
                        isDark={false}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Movie;
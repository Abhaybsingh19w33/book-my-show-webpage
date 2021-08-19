import React, { Fragment, useState, useEffect } from 'react';
import HeroSlider from "react-slick";
import axios from "axios";

// component
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    // to excute only once [] is added
    // this format will solve race condition
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            // getting data from api
            const getImages = await axios.get("/movie/now_playing");
            // setting data to images from api
            setImages(getImages.data.results);
        };

        requestNowPlayingMovies();
    }, []);

    // settings for large screens
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings = {
        arrows: true,
        // centerMode: true,
        // centerPadding: "200px",
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <Fragment>
            {/* hidden for large devices*/}
            <div className="lg:hidden">
                {/* hero slider */}
                <HeroSlider {...settings}>
                    {/* mapping images from api */}
                    {images.map((image) => (
                        // w-full set width to full
                        // h-56 - set height to 56
                        // md:h-80 set height to 80 for medium screen
                        // py-3 margin 3 unit from  top and bottom
                        <div className="w-full h-56 md:h-80 py-3 ">
                            {/* w-full width set to full */}
                            {/* h-full height set to full */}
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="testing"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            {/* hidden for small and medium */}
            {/* lg:block for largeg screen */}
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {/* mapping images from api */}
                    {images.map((image) => (
                        // w-full - set width to  full
                        // h-96 - set height to 96
                        // px-2 - padding from left and right
                        // py-3 - padding top and bottom
                        <div className="w-full h-96 px-2 py-3">
                            {/* w-full width set to full */}
                            {/* h-full height set to full */}
                            {/* rounded-md rounded the edges */}
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="testing"
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </Fragment>
    );
};

export default HeroCarousal;
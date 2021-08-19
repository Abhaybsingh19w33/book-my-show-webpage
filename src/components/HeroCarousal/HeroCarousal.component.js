import React, { Fragment, useState, useEffect } from 'react';
import HeroSlider from "react-slick";
import axios from "axios";

// component
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    // to excute only once
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
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
            {/* hidden  for large devices*/}
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        // full for medium and small
                        // medium height 80
                        // py-3 margin top and bottom
                        <div className="w-full h-56 md:h-80 py-3 ">
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
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        // width full
                        // height 96
                        // padding from left and right for spacing between them
                        // padding top and bottom
                        <div className="w-full h-96 px-2 py-3">
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
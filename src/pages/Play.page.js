import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';

// component
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const Plays = () => {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const requesNowPlaying = async () => {
            const getNowPlaying = await axios.get("/movie/now_playing");
            setNowPlaying(getNowPlaying.data.results);
        };

        requesNowPlaying();
    }, []);

    return (
        <Fragment>
            <div className="container mx-auto px-4">
                {/* lg:flex-row-reverse - for large screen the children will be reversed */}
                <div className="w-full lg:flex lg:flex-row-reverse">
                    {/* lg:w-3/4 - for large screen it will take 75% of screeen */}
                    <div className="lg:w-3/4">
                        <PosterSlider
                            images={nowPlaying}
                            title="Now Playing"
                            isDark={false}
                        />
                    </div>
                    {/* lg:w-3/12 - for large screen it will take 25% of screeen */}
                    <div className="lg:w-3/12 ">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            {/* PlaysFilter - this is the filter for movies*/}
                            <PlaysFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                            <PlaysFilter
                                title="Language"
                                tags={["Tamil", "Telegu", "English"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Plays;
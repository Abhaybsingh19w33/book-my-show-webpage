import React, { Fragment } from 'react';

// components
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
    return (
        <Fragment>
            <div>
                {/* mobile */}
                <div
                    className="relative md:hidden w-full"
                    style={{ height: "calc(180vw)" }}
                >
                    <div className="absolute z-20 bottom-4 left-4">
                        <MovieInfo />
                    </div>
                    <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-mugen-train-et00313314-30-07-2021-05-14-22.jpg"
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>

                {/* Medium */}
                <div
                    className="relative hidden md:block w-full lg:hidden"
                    style={{ height: "calc(85vw)" }}
                >
                    <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <div className="absolute z-20 bottom-4 ">
                        <MovieInfo />
                    </div>
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-mugen-train-et00313314-30-07-2021-05-14-22.jpg"
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>

                {/* Large */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                        }}
                    />

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className=" w-64 h-96 ">
                            <img
                                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-mugen-train-et00313314-30-07-2021-05-14-22.jpg"
                                alt="poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-mugen-train-et00313314-30-07-2021-05-14-22.jpg"
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default MovieHero;

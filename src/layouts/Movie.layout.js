import React, { Fragment, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

// context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    return (
        <Fragment>
            <MovieNavbar />
            {props.children}
        </Fragment>
    );
};

export default MovieLayout;
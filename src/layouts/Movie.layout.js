import React, { Fragment } from "react";

// Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

const MovieLayout = (props) => {
    return (
        <Fragment>
            <MovieNavbar />
            {props.children}
        </Fragment>
    );
};

export default MovieLayout;
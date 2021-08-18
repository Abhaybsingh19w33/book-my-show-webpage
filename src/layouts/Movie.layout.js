import React, { Fragment } from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";

const MovieLayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    );
};

export default MovieLayout;
import React, { Fragment } from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <HeroCarousal />
            {/* all the props children is passes here */}
            {props.children}
        </Fragment>
    );
};

export default DefaultLayout;
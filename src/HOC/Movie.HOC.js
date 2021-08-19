import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Layout
import MovieLayout from '../layouts/Movie.layout';

// here component is extracted from props and stored in Component
// rest stores the remaining pros
const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    // movie layout
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}
            />
        </Fragment>
    );
};

export default MovieHOC;
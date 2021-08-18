import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Layout
import MovieLayout from '../layouts/Movie.layout';

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}
            />
        </Fragment>
    );
};

export default MovieHOC;
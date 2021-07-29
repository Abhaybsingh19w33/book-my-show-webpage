import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </Fragment>
    );
};

export default DefaultHOC;
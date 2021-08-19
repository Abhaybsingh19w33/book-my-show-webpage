import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";

// here component is extracted from props and stored in Component
// rest stores the remaining pros
const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            {/* Route  */}
            <Route
                {...rest}
                component={(props) => (
                    // general layout
                    <DefaultLayout>                        
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </Fragment>
    );
};

export default DefaultHOC;
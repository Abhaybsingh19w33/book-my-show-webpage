import React, { Fragment } from 'react';

const Cast = (props) => {
    return (
        <Fragment>
            <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                    {/* rounded-full - to make the image div circular */}
                    <img
                        src={props.image}
                        alt="crew man"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-xl text-gray-800">{props.castName}</h1>
                <h5 className="text-sm text-gray-500">as {props.role}</h5>
            </div>
        </Fragment>
    );
};

export default Cast;
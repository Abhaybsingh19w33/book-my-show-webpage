import React, { Fragment } from "react";

const Poster = (props) => {
    return (
        <Fragment>
            {/* flex col to make image title and subtitle in same column */}
            {/* item start to align the item to left */}

            <div className="flex flex-col items-start gap-2 px-3">
                {/* width is not mentioned here it will be taken care of by the carousel */}
                <div className="h-80">
                    <img
                        src={props.src}
                        alt={props.title}
                        className="w-full h-full rounded-xl"
                    />
                </div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            </div>
        </Fragment>
    );
};

export default Poster;
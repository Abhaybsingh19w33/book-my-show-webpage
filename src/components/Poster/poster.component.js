import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
    return (
        <Fragment>
            {/* passinng movie id from api */}
            <Link to={`/movie/${props.id}`}>
                {/* flex col to make image title and subtitle in same column */}
                {/* item start to align the item to left */}
                {/* flex - to align the items in same row */}
                {/* items-start -  align items from left */}
                {/* gap-2 - gap of 2 unit */}
                {/* px-1 : padding 1 unit from left and right */}
                {/* md: px-3 for medium screen padding of 3 unit from left and right */}
                <div className="flex flex-col items-start gap-2 px-1 md: px-3 ">
                    {/* width is not mentioned here it will be taken care of by the carousel */}
                    {/* h-40 : set height to 40 */}
                    {/* md: h-80 - for medium screen set height to 80 */}
                    <div className="h-40 md: h-80">
                        {/* w-full width set to full */}
                        {/* h-full height set to full */}
                        {/* rounded-md - round the edge */}
                        {/* here passing image data from props */}
                        <img
                            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                            alt={props.original_title}
                            className="w-full h-full rounded-md"
                        />
                    </div>
                    {/* text-lg -set text to large */}
                    {/* fond-bold - set font to bold */}
                    <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.original_title}</h3>
                    <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
                </div>
            </Link>
        </Fragment>
    );
};

export default Poster;
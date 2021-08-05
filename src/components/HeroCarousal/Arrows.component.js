import React, { Fragment } from 'react';

// creating custom arrows
export const NextArrow = (props) => {
    // const { className, style, onClick } = props;
    // here this props contains className, Style, onClick
    return (
        <Fragment>
            <div
                className={props.className}
                // applying all the existing styles
                style={{ ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </Fragment>
    );
}

export const PrevArrow = (props) => {
    return <Fragment>
        <div
            className={props.className}
            // applygin all the existing styles
            style={{ ...props.style, backgroundColor: "black" }}
            onClick={props.onClick}
        />
    </Fragment>;
}
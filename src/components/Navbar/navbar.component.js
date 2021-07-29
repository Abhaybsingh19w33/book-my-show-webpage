import React, { Fragment } from 'react';
import {
    BiChevronRight,
    BiSearch,
    BiMenu,
    BiChevronDown,
} from "react-icons/bi";

const NavSm = () => {
    return (
        <Fragment>
            {/* text-white - changin gtext color to white */}
            {/* flex - to adjust 2 items in same row */}
            {/* item-center - to align them in center */}
            {/* justify the space center */}
            <div className="text-white flex items-center justify-between">
                <div>
                    {/* text-xl large text */}
                    {/* font-bold - bold the text */}
                    <h3 className="text-xl font-bold">It All starts Here!</h3>
                    {/* grey text */}
                    {/* text-xs - means extra small */}
                    {/* flex to adjust 2 property in same row */}
                    <span className="text-gray-400 text-xs flex items-center">
                        Vapi <BiChevronRight />
                    </span>
                </div>
                {/* seperate div it is used to not overflow out of container */}
                {/* width and height */}
                <div className="w-8 h-8">
                    {/* bisearch - search icon */}
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </Fragment>
    );
};
const NavMd = () => {
    return (
        <Fragment>
            {/* // width of full */}
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                <BiSearch />
                {/* bg-transparent remove the bg lines */}
                {/* border-none no border */}
                {/* focus:outline-none" on focus outline will be none */}
                <input
                    type="search"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search for movies, events, Plays, Sports and Activities."
                />
            </div>
        </Fragment>
    );
};
const NavLg = () => {
    return (
        <Fragment>
            {/* for horizontal padding use container mx-auto */}
            {/* carefull of w-full */}
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for movies, events, Plays, Sports and Activities."
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {/* cursor-pointer - changing cursor to the pointer */}
                    <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                        Vapi <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
const Navbar = () => {
    return <Fragment>
        {/* p-4 padding of 4 on all sides */}
        <nav className="bg-bms-700 p-4">
            {/* md:hidden from md to xl this will be hidden */}
            <div className="md:hidden">
                {/* for mobile screen */}
                <h1>this is navbar</h1>
                <NavSm />
            </div>
            {/* hidden by default */}
            {/* for medium flex */}
            {/* lg:hidden hide for large devices */}
            <div className="hidden md:flex lg:hidden">
                {/* for medium screen */}
                <NavMd />
            </div>
            <div className="hidden w-full lg:flex">
                {/* for pc screen */}
                <NavLg />
            </div>
        </nav>
    </Fragment>
};

export default Navbar;
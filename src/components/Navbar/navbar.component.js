import React, { Fragment } from 'react';
import {
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
                    {/* <span className="text-gray-400 text-xs flex items-center">
                        Vapi <BiChevronRight />
                    </span> */}
                </div>
                {/* seperate div it is used to not overflow out of container */}
                {/* width and height */}
                <div className="w-8 h-8">
                    {/* bisearch - search icon */}
                    {/* w-full width set to full */}
                    {/* h-full height set to full */}
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </Fragment>
    );
};
const NavMd = () => {
    return (
        <Fragment>
            {/* w-full - width of full */}
            {/* flex - to align the items in same row */}
            {/* items-center - to center the item */}
            {/* gap-3 gap between my icon and search box */}
            {/* bg-white - set bg color to white */}
            {/* px-3 padding left and right by 3 */}
            {/* py-3 padding top and bottom by 3 */}
            {/* rounded-md rounded the edges */}
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                {/* search icon */}
                <BiSearch />
                {/* bg-transparent remove the bg lines */}
                {/* border-none no border */}
                {/* focus:outline-none" on focus outline will be none */}
                {/* w-full set width to full */}
                {/* bg-transparent - bg transparent */}
                {/* border-none - removing borders */}
                {/* focus: outline-none when focused the inside border will be removed */}
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
            {/* container  */}
            {/* mx-auto auto margin from left and right */}
            {/* px-4 padding left and right by 4 */}
            {/* flex - to adjust 2 items in same row */}
            {/* items-center - to align them in center */}
            {/* justify-between - justify the space center */}
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* flex - to adjust 2 items in same row */}
                {/* items-center - to align them in center */}
                {/* w-1/2 - giving half the width */}
                {/* gap-3 - to provide 3 uint gap between 2 divs */}
                <div className="flex items-center w-1/2 gap-3">
                    {/* w-12 width to 12 */}
                    {/* h-12 height to 12 */}
                    <div className="w-12 h-12">
                        {/* w-full width set to full */}
                        {/* h-full height set to full */}
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    {/* w-full width set to full */}
                    {/* flex - align items in same row */}
                    {/* items-center - to align them in center */}
                    {/* gap-3 - to provide 3 uint gap between 2 divs */}
                    {/* bg-white set bg to white */}
                    {/* px-3 padding left and right by 3 */}
                    {/* py-2 padding top and bottom by 2 */}
                    {/* rounded-md rounded the edges */}
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        {/* search icon */}
                        <BiSearch />
                        {/* bg-transparent remove the bg lines */}
                        {/* border-none no border */}
                        {/* focus:outline-none" on focus outline will be none */}
                        {/* w-full set width to full */}
                        {/* bg-transparent - bg transparent */}
                        {/* border-none - removing borders */}
                        {/* focus: outline-none when focused the inside border will be removed */}
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for movies, events, Plays, Sports and Activities."
                        />
                    </div>
                </div>
                {/* flex - to align the items in same row */}
                {/* items-center - to center the item */}
                {/* gap-3 gap between my icon and search box */}
                <div className="flex items-center gap-3">
                    {/* cursor-pointer - changing cursor to the pointer */}
                    {/* text-gray-200 - set text color to gray */}
                    {/* text-xs - set text to extra small */}
                    {/* flex - to align the items in same row */}
                    {/* items-center - to center the item */}
                    {/* hover:text-white - when hover text color change to white */}
                    {/* BiChevronDown - down icon */}
                    <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                        Vapi <BiChevronDown />
                    </span>
                    {/* cursor-pointer - changing cursor to the pointer */}
                    {/* bg-red-600 - bg color to red */}
                    {/* text-white -  set text to white */}
                    {/* px-2 padding left and right by 2 */}
                    {/* py-1 padding top and bottom by 1 */}
                    {/* text-sm - set text to small */}
                    {/* rounded - set button edge to round */}
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                        Sign in
                    </button>
                    {/* w-8 - set width to 8 */}
                    {/* h-8 - set height to 8 */}
                    {/* text-white - set text color to white */}
                    <div className="w-8 h-8 text-white">
                        {/* BiMenu - menu icon */}
                        {/* w-full width set to full */}
                        {/* h-full height set to full */}
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
                <NavSm />
            </div>
            {/* hidden by default */}
            {/* md:flex - for medium screen flex */}
            {/* lg:hidden hide for large devices */}
            <div className="hidden md:flex lg:hidden">
                {/* for medium screen */}
                <NavMd />
            </div>
            {/* hidden - hidden for xs to medium */}
            {/* w-full width set to full */}
            {/* lg:flex - to align item in */}
            <div className="hidden w-full lg:flex">
                {/* for pc screen */}
                <NavLg />
            </div>
        </nav>
    </Fragment>
};

export default Navbar;
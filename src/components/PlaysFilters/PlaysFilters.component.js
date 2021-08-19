import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
const PlaysFilter = (props) => {
    return (
        <Disclosure>
            {/* open - it will represent if the filter is open or not */}
            {({ open }) => (
                <div>
                    {/* filter button */}
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        {/* if open up button will be displayed else down button eill be displayed*/}
                        {open ? <BiChevronUp /> : <BiChevronDown />}{" "}
                        {/* if open then  text is red else text will be gray */}
                        <span className={open ? "text-red-600" : "text-gray-700"}>
                            {props.title}
                        </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className="flex item-center gap-3 flex-wrap">
                            {props.tags.map((tag) => (
                                <Fragment>
                                    <div className="border-2 border-gray-200 px-3 py-2">
                                        <span className="text-red-600">{tag}</span>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
};

export default PlaysFilter;
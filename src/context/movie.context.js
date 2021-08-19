import React, { useState } from "react";

// Creates a Context object. When React renders a 
// component that subscribes to this Context object 
// it will read the current context value from the 
// closest matching Provider above it in the tree.
export const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
    });

    return (
        // The Provider component accepts a value prop to be 
        // passed to consuming components that are descendants 
        // of this Provider. One Provider can be connected to 
        // many consumers. Providers can be nested to override 
        // values deeper within the tree.
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
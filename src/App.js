import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from './HOC/Movie.HOC';

// Pages
import HomePage from "./pages/Home.page";
import Movie from './pages/Movie.page';
import Plays from './pages/Play.page';

const App = () => {
  // function App() {
  return (
    <Fragment>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </Fragment>
  );
}

export default App;

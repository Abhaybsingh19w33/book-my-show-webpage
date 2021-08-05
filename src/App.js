import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Pages
import HomePage from "./pages/Home.page";

const App = () => {
  // function App() {
  return (
    <Fragment>
      <DefaultHOC path="/" exact component={HomePage} />
    </Fragment>
  );
}

export default App;
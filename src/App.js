import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Temp from "./components/temp";

const App = () => {
  // function App() {
  return (
    <Fragment>
      <DefaultHOC path="/" exact component={Temp} />
    </Fragment>
  );
}

export default App;
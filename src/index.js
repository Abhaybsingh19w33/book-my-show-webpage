import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// context provider
import MovieProvider from "./context/movie.context";

ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter to route the page */}
    <BrowserRouter>
      {/* MovieProvider thie will provide movie data to app.js */}
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

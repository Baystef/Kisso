import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Home = () => (
  <header className="App-header">
    <img src={require('../doc/kisso-dev.png')} className="App-logo" alt="logo" />
    <div className="flex justify-around">
      <Link to="/signup">
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
          Sign Up
     </button>
      </Link>

      <Link to="/signin">
        <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
          Sign In
     </button>
      </Link>
    </div>
  </header>
)

export default Home;

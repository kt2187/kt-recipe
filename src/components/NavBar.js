import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="header">
      <h1 id="app-title">
        <Link to="/">KT's Recipes</Link>
      </h1>
      <div id="app-navigation">
        <Link id="App-link" to="/addrecipe">Add Recipe</Link>
      </div>
    </div>
  )
}

export default NavBar;
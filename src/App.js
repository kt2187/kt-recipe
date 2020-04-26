import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import NavBar from './components/NavBar';
import recipes from './mock/recipes';

class App extends Component {
  //Load default data 
  state = {
    recipes: [...recipes],
  };

  addRecipe = (recipeData) => {
    this.setState({
      recipes: [...this.state.recipes, recipeData],
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <switch>
            <Route path="/" exact>
              <RecipeList recipeList={this.state.recipes} />
            </Route>
            <Route path="/addrecipe" exact>
              <RecipeForm addRecipe={this.addRecipe} />
            </Route>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

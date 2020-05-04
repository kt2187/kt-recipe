import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import ViewRecipe from './components/ViewRecipe';
import NavBar from './components/NavBar';
import INITIAL_RECIPES from './mock/recipes';

class App extends Component {
  state = {
    recipes: [...INITIAL_RECIPES],
    selected: 1,
  };

  addRecipe = (recipeData) => {
    recipeData.id = this.state.recipes[this.state.recipes.length - 1].id + 1;
    console.log("hello", recipeData);
    this.setState({
      ...this.state,
      recipes: [...this.state.recipes, recipeData],
    });
  };

  handleSelect = (id) => {
    console.log("clicked", id);
    this.setState({
      ...this.state,
      selected: id,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <RecipeList
                recipeList={this.state.recipes}
                handleSelect={this.handleSelect} />
            </Route>
            <Route path="/addrecipe" exact>
              <RecipeForm addRecipe={this.addRecipe} />
            </Route>
            <Route path="/recipe/:recipeId">
              {/* <ViewRecipe recipe={this.state.recipes[this.state.selected - 1]} />*/}
              <ViewRecipe recipe={this.state.recipes} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

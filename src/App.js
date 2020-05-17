import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import ViewRecipe from './components/ViewRecipe';
import NavBar from './components/NavBar';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <RecipeList />
                    </Route>
                    <Route path="/addrecipe" exact>
                        <RecipeForm />
                    </Route>
                    <Route path="/recipe/:recipeId">
                        {/*<ViewRecipe recipe={this.state.recipes} />*/}
                        <ViewRecipe />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

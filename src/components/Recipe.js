import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Recipe extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.props.handleSelect(this.props.recipe.id);
    this.setState({ clicked: true })
  };

  render() {
    const { recipe } = this.props;

    return (
      <div className="row" onClick={() => this.handleClick()}>
        {this.state.clicked ? <Redirect to="/recipe/id" /> : null}
        <div className="col s12 m6 13 center-align">
          <div className="card">
            <div className="card-content">
              <h4>{recipe.recipeName}</h4>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Recipe Notes: {recipe.recipeNotes}</p>
              <p>Comments: {recipe.comments}</p>
              <div className="card-action"><a href={recipe.link} target="_blank">Recipe Details</a></div>
              <div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Recipe;
import React, { Component } from 'react';
import Button from './common/Button';

const INITIAL_STATE = {
  id: 0,
  recipeName: "",
  link: "",
  video: "",
  ingredients: [],
  instructions: [],
  recipeNotes: "",
  comments: [],
  rating: "",
};


class RecipeForm extends Component {
  state = { ...INITIAL_STATE }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    //Add form validation here
    e.preventDefault();
    const recipeData = { ...this.state };
    recipeData.ingredients = recipeData.ingredients.split(", ");
    recipeData.instructions = recipeData.instructions.split(", ");
    this.props.addRecipe(recipeData);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div className="addRecipes">
        <h4>Add Recipe</h4>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            id="recipeName"
            placeholder="Recipe Name"
            value={this.state.recipeName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="link"
            placeholder="Recipe Link (Optional)"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="video"
            placeholder="Recipe Video (Optional)"
            value={this.state.video}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="ingredients"
            placeholder="Ingredients"
            value={this.state.ingredients}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="instructions"
            placeholder="Instructions"
            value={this.state.instructions}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="recipeNotes"
            placeholder="Recipe Notes (Optional)"
            value={this.state.recipeNotes}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 Rating"
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <Button type="submit">Submit
        </Button>
        </form>
      </div>
    )
  }
}

export default RecipeForm;
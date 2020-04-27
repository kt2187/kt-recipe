import React, { Component } from 'react';

const INITIAL_STATE = {
  id: 0,
  recipeTitle: "",
  posterName: "",
  link: "",
  video: "",
  ingredients: [],
  instructions: [],
  recipeNotes: "",
  comments: [],
};


class RecipeForm extends Component {
  state = { ...INITIAL_STATE }

  // componentDidMount = () => {
  //   console.log("Mounting Form");
  //   this.setState({ ...INITIAL_STATE });
  // };

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
    recipeData.comments = recipeData.comments.split(", ");
    this.props.addRecipe(recipeData);
    this.setState({
      recipeName: "",
      posterName: "",
      link: "",
      video: "",
      ingredients: [],
      instructions: [],
      recipeNotes: "",
      comments: [],
    });
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
            id="posterName"
            placeholder="Poster Name"
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="link"
            placeholder="Recipe Link"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="video"
            placeholder="Recipe Video"
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
            placeholder="Recipe Notes"
            value={this.state.recipeNotes}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="comments"
            placeholder="Comments"
            value={this.state.comments}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeForm;
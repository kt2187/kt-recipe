import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './common/Button';

class ViewRecipe extends Component {
  state = {
    showComments: false,
  };

  clickHandler = () => {
    this.setState({
      showComments: !this.state.showComments,
    });
  };

  renderComments = (recipe) => {
    return recipe.comments.map((comment) => {
      return (
        <div key={comment.commenter} className="card-content">
          <p>{comment.commenter}</p>
          <p>{comment.text}</p>
        </div>
      );
    });
  };

  render() {
    const { recipeId } = this.props.match.params;
    const recipe = this.props.recipe[recipeId - 1];
    return (
      <div className="col s12 m6 13 center-align" >
        <div className="card">
          <div className="card-content">
            <h4>{recipe.recipeName}</h4>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            {recipe.recipeNotes ? (<p>Recipe Notes: {recipe.recipeNotes}</p>) : null}


            {recipe.link ? (<div className="card-action"><a href={recipe.link} target="_blank">Recipe Source</a></div>) : null}
            {recipe.video ? (<div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>) : null}
            <div>
              <Button onClick={this.clickHandler}>
                {this.state.showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              {this.state.showComments ? this.renderComments(recipe) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewRecipe);
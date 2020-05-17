import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './common/Button';
import { connect } from 'react-redux';

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

    renderStars = (recipe) => {
        const rating = recipe.rating;
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "⭐";
        }
        return stars;
    };


    render() {
        let { recipeId } = this.props.match.params;
        recipeId = parseInt(recipeId);
        console.log(recipeId)
        const recipeIndex = this.props.recipes.list.findIndex(
            (item) => item.id === recipeId
        );
        const recipe = this.props.recipes.list[recipeIndex];

        return (
            <div className="col s12 m6 13 center-align" >
                <div className="card">
                    <div className="card-content">
                        <h4>{recipe.recipeName}</h4>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Instructions: {recipe.instructions}</p>
                        {recipe.recipeNotes ? (<p>Recipe Notes: {recipe.recipeNotes}</p>) : null}
                        <p>
                            Rating: {this.renderStars(recipe)}
                        </p>
                        {recipe.link ? (<div className="card-action"><a href={recipe.link} target="_blank">Recipe Source</a></div>) : null}
                        {/*{recipe.video ? (<div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>) : null}*/}
                        {recipe.video ? (<div><iframe width="width" height="width" src={recipe.video}></iframe></div>) : null}
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

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(withRouter(ViewRecipe));
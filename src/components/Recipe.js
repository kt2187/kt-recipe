import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Recipe extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        //this.props.handleSelect(this.props.recipe.id);
        this.setState({ clicked: true })
    };

    render() {
        const { recipe } = this.props;

        return (
            <div className="row" onClick={() => this.handleClick()}>
                {this.state.clicked ? <Redirect to={`/recipe/${recipe.id}`} /> : null}
                <div className="col s12 m6 13 center-align">
                    <div className="card">
                        <div className="card-content">
                            <h4>{recipe.recipeName}</h4>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Instructions: {recipe.instructions}</p>
                            {recipe.recipeNotes ? (<p>Recipe Notes: {recipe.recipeNotes}</p>) : null}
                            {recipe.comments ? (<p>Comments: {recipe.comments.length}</p>) : null}
                            <p>Rating: {recipe.rating}</p>
                            {recipe.link ? (<div className="card-action"><a href={recipe.link} target="_blank">Recipe Source</a></div>) : null}
                            {/*{recipe.video ? (<div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>) : null}*/}
                            {/*{recipe.video ? (<div><iframe width="width" height="width" src={recipe.video}></iframe></div>) : null}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recipe;
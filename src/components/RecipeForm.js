import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeForm, submitForm } from '../Actions';
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
        //this.setState({
        //    ...this.state,
        //    [e.target.id]: e.target.value,
        //});
        this.props.changeForm(e.target.id, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitForm(this.props.newRecipe.form);
    };



    render() {
        const { form } = this.props.newRecipe;

        return (
            <div className="addRecipes">
                <h4>Add Recipe</h4>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        id="recipeName"
                        placeholder="Recipe Name"
                        value={form.recipeName}
                        onChange={(e) => this.handleChange(e)}
                        required
                    />
                    <input
                        type="text"
                        id="link"
                        placeholder="Recipe Link (Optional)"
                        value={form.link}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type="text"
                        id="video"
                        placeholder="Recipe Video (Optional)"
                        value={form.video}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type="text"
                        id="ingredients"
                        placeholder="Ingredients"
                        value={form.ingredients}
                        onChange={(e) => this.handleChange(e)}
                        required
                    />
                    <input
                        type="text"
                        id="instructions"
                        placeholder="Instructions"
                        value={form.instructions}
                        onChange={(e) => this.handleChange(e)}
                        required
                    />
                    <input
                        type="text"
                        id="recipeNotes"
                        placeholder="Recipe Notes (Optional)"
                        value={form.recipeNotes}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type="number"
                        id="rating"
                        placeholder="1 to 5 Rating"
                        value={form.rating}
                        onChange={(e) => this.handleChange(e)}
                        required
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        newRecipe: store.newRecipe
    }
}

export default connect(mapStateToProps, {
    changeForm,
    submitForm,
})(RecipeForm);
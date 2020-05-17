import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../Actions';
import Recipe from './Recipe';

class RecipeList extends Component {

    state = {
        query: "",
        filteredRecipes: [...this.props.recipes.list],
    };

    handleChange = (e) => {
        const query = e.target.value;

        const newRecipes = this.props.recipes.list.filter(
            (recipe) =>
                recipe.recipeName.toLowerCase().indexOf(query.toLowerCase()) >= 0
        );

        this.setState({
            query: query,
            filteredRecipes: newRecipes,
        });
    };

    handleClick = () => {

        this.props.increment(this.props.count)
    }

    renderRecipes = () => {

        const displayRecipes = this.state.filteredRecipes.map((recipe) => {
            return (
                <Recipe
                    recipe={recipe}
                    key={recipe.id}
                //handleSelect={this.props.handleSelect}
                />
            );
        });

        return displayRecipes;
    };

    render() {
        return (
            <div>
                <div style={myStyles.searchBar}>
                    <p>
                        <span role="img"></span>
                        <input
                            style={myStyles.input}
                            type="text"
                            placeholder="search titles"
                            onChange={this.handleChange}
                        />
                    </p>
                </div>
                <div className="recipeList">{this.renderRecipes()}</div>
                <div className="footer">
                    <button onClick={this.handleClick}>Increase</button>
                    <p>{this.props.count}</p>
                </div>
            </div>
        );
    };
};

const myStyles = {
    searchBar: {
        flex: 1,
        flexDirection: "row",
        marginLeft: "30%",
        marginRight: "30%",
        marginBottom: 16,
    },
    input: {
        width: "70%",
        height: 32,
        fontSize: 20,
        marginBottom: 4,
    },
};

const mapStateToProps = (state) => {
    return {
        //recipes: state.posts
        count: state.recipes.count,
        recipes: state.recipes
    }
}

const mapActionsToProps = () => {
    return {
        increment,
    };
};

export default connect(mapStateToProps, mapActionsToProps())(RecipeList);
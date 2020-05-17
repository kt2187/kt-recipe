import recipes from '../mock/recipes';
import { INCREMENT, SUBMIT_FORM } from '../Actions/types';

const INITIAL_STATE = {
    list: [...recipes],
    loading: false,
    errors: {},
    count: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload
            }
        case SUBMIT_FORM:
            const newRecipe = action.payload;
            newRecipe.id = state.list[state.list.length - 1].id + 1;
            return {
                ...state,
                list: [...state.list, newRecipe],
            };
        default:
            return state;
    }
};
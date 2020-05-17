import { CHANGE_FORM, SUBMIT_FORM } from '../Actions/types'

const INITIAL_STATE = {
    form: {
        id: 0,
        recipeName: "",
        link: "",
        video: "",
        ingredients: [],
        instructions: [],
        recipeNotes: "",
        comments: [],
        rating: "",
    },
    loading: false,
    errors: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.field]: action.payload.value
                }
            }
        case SUBMIT_FORM:
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}
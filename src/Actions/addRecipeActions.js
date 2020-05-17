import { CHANGE_FORM, SUBMIT_FORM } from './types';

export const changeForm = (field, value) => dispatch => {
    dispatch({
        type: CHANGE_FORM,
        payload: {
            field,
            value
        }
    });
};

export const submitForm = (data) =>
    (dispatch) => {
        data.ingredients = data.ingredients.split(", ");
        data.instructions = data.instructions.split(", ");
        dispatch({
            type: SUBMIT_FORM,
            payload: data,
        });
    };
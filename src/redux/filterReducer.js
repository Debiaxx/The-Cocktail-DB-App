import {filterAPI, searchAPI} from "../dal/api";

const SET_RESULT_BY_CATEGORY = 'SET_RESULT_BY_CATEGORY';
const SET_RESULT_BY_ALCOHOL = 'SET_RESULT_BY_ALCOHOL';
const SET_RESULT_BY_GLASS = 'SET_RESULT_BY_GLASS';
const SET_RESULT_BY_INGREDIENTS = 'SET_RESULT_BY_INGREDIENTS';
const SET_RESULT_BY_QUERY = 'SET_RESULT_BY_QUERY';

let initialState = {
    byCategory: [],
    byAlcohol: [],
    byGlass: [],
    byIngredients: [],
    byQuery: [],
}

let filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT_BY_CATEGORY:
            return {
                ...state,
                byCategory: action.result,
            }
        case SET_RESULT_BY_ALCOHOL:
            return {
                ...state,
                byAlcohol: action.result,
            }
        case SET_RESULT_BY_GLASS:
            return {
                ...state,
                byGlass: action.result,
            }
        case SET_RESULT_BY_INGREDIENTS:
            return {
                ...state,
                byIngredients: action.result,
            }
        case SET_RESULT_BY_QUERY:
            return {
                ...state,
                byQuery: action.result,
            }
        default:
            return state;
    }
}

export default filterReducer;

//AC
export const setResultByCategory = (result) => ({type: SET_RESULT_BY_CATEGORY, result});
export const setResultByAlcohol = (result) => ({type: SET_RESULT_BY_ALCOHOL, result});
export const setResultByGlass = (result) => ({type: SET_RESULT_BY_GLASS, result});
export const setResultByIngredients = (result) => ({type: SET_RESULT_BY_INGREDIENTS, result});
export const setResultByQuery = (result) => ({type: SET_RESULT_BY_QUERY, result});

//ThC
export const filterByCategory = (category) => {
    return (dispatch) => {
        filterAPI.byCategory(category).then(response => {
            dispatch(setResultByCategory(response.data.drinks))
        })
    }
}
export const filterByAlcohol = (alco) => {
    return (dispatch) => {
        filterAPI.byAlcoholic(alco).then(response => {
            dispatch(setResultByAlcohol(response.data.drinks))
        })
    }
}
export const filterByGlass = (glass) => {
    return (dispatch) => {
        filterAPI.byGlass(glass).then(response => {
            dispatch(setResultByGlass(response.data.drinks))
        })
    }
}
export const filterByIngredients = (ingredients) => {
    return (dispatch) => {
        filterAPI.byMultiIngredient(ingredients).then(response => {
            dispatch(setResultByIngredients(response.data.drinks))
        })
    }
}
export const cocktailByName = (query) => {
    return (dispatch) => {
        searchAPI.cocktailByName(query).then(response => {
            // debugger
            dispatch(setResultByQuery(response.data.drinks))
        })
    }
}
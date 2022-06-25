import {filterAPI, lookupAPI, searchAPI} from "../dal/api";

const SET_RESULT_BY_CATEGORY = 'SET_RESULT_BY_CATEGORY';
const SET_RESULT_BY_ALCOHOL = 'SET_RESULT_BY_ALCOHOL';
const SET_RESULT_BY_GLASS = 'SET_RESULT_BY_GLASS';
const SET_RESULT_BY_INGREDIENTS = 'SET_RESULT_BY_INGREDIENTS';
const SET_RESULT_BY_QUERY = 'SET_RESULT_BY_QUERY';
const SET_RESULT_BY_FIRST_LETTER = 'SET_RESULT_BY_FIRST_LETTER';
const SET_LETTER = 'SET_LETTER';
const SET_COCKTAIL_INFO = 'SET_COCKTAIL_INFO';

let initialState = {
    byCategory: [],
    byAlcohol: [],
    byGlass: [],
    byIngredients: [],
    byQuery: [],
    byFirstLetter: [],
    letter: '',
    cocktail_info: {},
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
        case SET_RESULT_BY_FIRST_LETTER:
            return {
                ...state,
                byFirstLetter: action.result,
            }
        case SET_LETTER:
            return {
                ...state,
                letter: action.letter
            }
        case SET_COCKTAIL_INFO:
            return {
                ...state,
                cocktail_info: action.info
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
export const setResultByFirstLetter = (result) => ({type: SET_RESULT_BY_FIRST_LETTER, result});
export const setLetter = (letter) => ({type: SET_LETTER, letter});
export const setCocktailInfo = (info) => ({type: SET_COCKTAIL_INFO, info});

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
export const getResultByFirstLetter = (letter) => {
    return (dispatch) => {
        lookupAPI.byFirstLetter(letter).then(response => {
            debugger
            dispatch(setResultByFirstLetter(response.data.drinks))
        })
    }
}
export const getCocktailInfoById = (id) => {
    return (dispatch) => {
        lookupAPI.cocktailDetailsById(id).then(respone => {
            dispatch(setCocktailInfo(respone.data.drinks[0]))
        })
    }
}
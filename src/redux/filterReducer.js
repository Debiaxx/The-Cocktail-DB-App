import {filterAPI, lookupAPI, searchAPI} from "../dal/api";

const SET_RESULT_BY_FIRST_LETTER = 'SET_RESULT_BY_FIRST_LETTER';
const SET_LETTER = 'SET_LETTER';
const SET_COCKTAIL_INFO = 'SET_COCKTAIL_INFO';

const SET_RESULT = 'SET_RESULT';
const SET_START_RESULT_VALUE = 'SET_START_RESULT_VALUE';

let initialState = {
    result: [],
    byFirstLetter: [],
    letter: '',
    cocktail_info: {},
}

let filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                result: Array.isArray(state.result) && state.result.length > 0 ?
                    state.result.filter(sr => Array.isArray(action.result) && action.result.length > 0 ? action.result.some(ar => ar.idDrink === sr.idDrink) : sr) : Array.isArray(action.result) && action.result.length > 0 ? action.result : [],
            }
        case SET_START_RESULT_VALUE:
            return {
                ...state,
                result: action.result,
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
export const setResultByFirstLetter = (result) => ({type: SET_RESULT_BY_FIRST_LETTER, result});
export const setLetter = (letter) => ({type: SET_LETTER, letter});
export const setCocktailInfo = (info) => ({type: SET_COCKTAIL_INFO, info});

export const setResult = (result) => ({type: SET_RESULT, result});
export const setStartResultValue = (result) => ({type: SET_START_RESULT_VALUE, result});

//ThC
export const filterByCategory = (category) => {
    return (dispatch) => {
        filterAPI.byCategory(category).then(response => {
            // dispatch(setResultByCategory(response.data.drinks))
            dispatch(setResult(response.data.drinks))
        })
    }
}
export const filterByAlcohol = (alco) => {
    return (dispatch) => {
        filterAPI.byAlcoholic(alco).then(response => {
            // dispatch(setResultByAlcohol(response.data.drinks))
            dispatch(setResult(response.data.drinks))
        })
    }
}
export const filterByGlass = (glass) => {
    return (dispatch) => {
        filterAPI.byGlass(glass).then(response => {
            // dispatch(setResultByGlass(response.data.drinks))
            dispatch(setResult(response.data.drinks))
        })
    }
}
export const filterByIngredients = (ingredients) => {
    return (dispatch) => {
        filterAPI.byMultiIngredient(ingredients).then(response => {
            // dispatch(setResultByIngredients(response.data.drinks))
            dispatch(setResult(response.data.drinks))
        })
    }
}
export const cocktailByName = (query) => {
    return (dispatch) => {
        searchAPI.cocktailByName(query).then(response => {
            // dispatch(setResultByQuery(response.data.drinks))
            dispatch(setResult(response.data.drinks))
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
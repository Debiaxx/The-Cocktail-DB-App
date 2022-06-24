import {listAPI, lookupAPI} from "../dal/api";

const SET_INGREDIENTS = 'SET_INGREDIENTS';
const SET_ALCOHOLIC_COCKTAILS = 'SET_ALCOHOLIC_COCKTAILS';
const SET_GLASSES = 'SET_GLASSES';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_POPULAR_COCKTAILS = 'SET_POPULAR_COCKTAILS';
const SET_LATEST_COCKTAILS = 'SET_LATEST_COCKTAILS';
const SET_RANDOM_COCKTAIL = 'SET_RANDOM_COCKTAIL';

let initialState = {
    ingredients: [],
    alcoholic_cocktails: [],
    glasses: [],
    categories: [],
    popular_cocktails: [],
    latest_cocktails: [],
    random_cocktail: {},
}

let listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        case SET_GLASSES:
            return {
                ...state,
                glasses: action.glasses,
            }
        case SET_ALCOHOLIC_COCKTAILS:
            return {
                ...state,
                alcoholic_cocktails: action.alcoholic_cocktails,
            }
        case SET_POPULAR_COCKTAILS:
            return {
                ...state,
                popular_cocktails: action.popular_cocktails,
            }
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
            }
        case SET_LATEST_COCKTAILS:
            return {
                ...state,
                latest_cocktails: action.latest_cocktails,
            }
        case SET_RANDOM_COCKTAIL:
            return {
                ...state,
                random_cocktail: action.random_cocktail,
            }
        default:
            return state;
    }
}

export default listsReducer;

//AC
export const setIngredients = (ingredients) => ({type: SET_INGREDIENTS, ingredients});
export const setAlcoholicCocktails = (alcoholic_cocktails) => ({type: SET_ALCOHOLIC_COCKTAILS, alcoholic_cocktails});
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});
export const setPopularCocktails = (popular_cocktails) => ({type: SET_POPULAR_COCKTAILS, popular_cocktails});
export const setLatestCocktails = (latest_cocktails) => ({type: SET_LATEST_COCKTAILS, latest_cocktails});
export const setGlasses = (glasses) => ({type: SET_GLASSES, glasses});
export const setRandomCocktail = (random_cocktail) => ({type: SET_RANDOM_COCKTAIL, random_cocktail});

//ThC
export const getIngredients = () => {
    return (dispatch) => {
        listAPI.ingredients('list').then(response => {
            dispatch(setIngredients(response.data.drinks))
        })
    }
}
export const getAlcoholCocktails = () => {
    return (dispatch) => {
        listAPI.alcoholic('list').then(response => {
            dispatch(setAlcoholicCocktails(response.data.drinks))
        })
    }
}
export const getCategories = () => {
    return (dispatch) => {
        listAPI.categories('list').then(response => {
            dispatch(setCategories(response.data.drinks))
        })
    }
}
export const getPopularCocktails = () => {
    return (dispatch) => {
        listAPI.popular('list').then(response => {
            dispatch(setPopularCocktails(response.data.drinks))
        })
    }
}
export const getLatestCocktails = () => {
    return (dispatch) => {
        listAPI.latest('list').then(response => {
            dispatch(setLatestCocktails(response.data.drinks))
        })
    }
}
export const getGlasses = () => {
    return (dispatch) => {
        listAPI.glasses('list').then(response => {
            dispatch(setGlasses(response.data.drinks))
        })
    }
}
export const getRandomCocktail = () => {
    return (dispatch) => {
        lookupAPI.randomCocktail().then(response => {
            dispatch(setRandomCocktail(response.data.drinks[0]))
            }
        )
    }
}
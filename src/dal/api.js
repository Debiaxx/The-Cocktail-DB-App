import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-cocktail-db.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '2f858a11d2msh063d13394086445p1da9a9jsn75b15330dd50',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    },
})

export const searchAPI = {
    cocktailByIngredient(i) {
        return instance.get(`filter.php?i=${i}`);
    },// already in filter api
    cocktailByName(s) {
        return instance.get(`search.php?s=${s}`);
    },
    ingredientByName(i) {
        return instance.get(`search.php?i=${i}`);
    },

}

export const lookupAPI = {
    randomCocktail() {
        return instance.get(`random.php`);
    },
    cocktailDetailsById(i) {
        return instance.get(`lookup.php?i=${i}`);
    },
    ingredientById(iid) {
        return instance.get(`lookup.php?iid=${iid}`);
    },
    randomCocktailSelection() {
        return instance.get(`randomselection.php`);
    },
}

export const filterAPI = {
    byCategory(c) {
        return instance.get(`filter.php?c=${c}`);
    },
    byAlcoholic(a) {
        return instance.get(`filter.php?a=${a}`);
    },
    byGlass(g) {
        return instance.get(`filter.php?g=${g}`);
    },
    byMultiIngredient(i) {
        return instance.get(`filter.php?i=${i}`);
    },
}

export const listAPI = {
    ingredients(i) {
        return instance.get(`list.php?i=${i}`);
    },
    alcoholic(a) {
        return instance.get(`list.php?a=${a}`);
    },
    glasses(g) {
        return instance.get(`list.php?g=${g}`);
    },
    categories(c) {
        return instance.get(`list.php?c=${c}`);
    },
    popular() {
        return instance.get(`popular.php`);
    },
    latest() {
        return instance.get(`latest.php`);
    },
}
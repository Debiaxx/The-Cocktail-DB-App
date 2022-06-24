import {connect} from "react-redux";
import CocktailsSearch from "./CocktailsSearch";
import {
    getAlcoholCocktails,
    getCategories,
    getGlasses, getIngredients,
    getLatestCocktails,
    getPopularCocktails
} from "../../redux/listsReducer";
import {
    cocktailByName,
    filterByAlcohol,
    filterByCategory,
    filterByGlass,
    filterByIngredients
} from "../../redux/filterReducer";

let mapStateToProps = (state) => ({
    ingredients: state.listsReducer.ingredients,
    categories: state.listsReducer.categories,
    alcoholic_cocktails: state.listsReducer.alcoholic_cocktails,
    glasses: state.listsReducer.glasses,

    by_category: state.filterReducer.byCategory,
    by_alco: state.filterReducer.byAlcohol,
    by_glass: state.filterReducer.byGlass,
    by_ingredients: state.filterReducer.byIngredients,
    by_query: state.filterReducer.byQuery,
})

export default connect(mapStateToProps, {
    getCategories,
    getAlcoholCocktails,
    getGlasses,
    getIngredients,

    filterByCategory,
    filterByAlcohol,
    filterByGlass,
    filterByIngredients,
    cocktailByName,
})(CocktailsSearch);
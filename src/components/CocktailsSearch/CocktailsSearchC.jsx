import {connect} from "react-redux";
import CocktailsSearch from "./CocktailsSearch";
import {
    getAlcoholCocktails,
    getCategories,
    getGlasses, getIngredients,
} from "../../redux/listsReducer";
import {
    cocktailByName,
    filterByAlcohol,
    filterByCategory,
    filterByGlass,
    filterByIngredients, setStartResultValue
} from "../../redux/filterReducer";

let mapStateToProps = (state) => ({
    ingredients: state.listsReducer.ingredients,
    categories: state.listsReducer.categories,
    alcoholic_cocktails: state.listsReducer.alcoholic_cocktails,
    glasses: state.listsReducer.glasses,

    result: state.filterReducer.result,
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

    setStartResultValue,
})(CocktailsSearch);
import {connect} from "react-redux";
import Main from "./Main";
import {getLatestCocktails, getPopularCocktails, getRandomCocktail} from "../../redux/listsReducer";

let mapStateToProps = (state) => ({
    popular_cocktails: state.listsReducer.popular_cocktails,
    latest_cocktails: state.listsReducer.latest_cocktails,
    random_cocktail: state.listsReducer.random_cocktail,
});

export default connect(mapStateToProps, {
    getPopularCocktails,
    getLatestCocktails,
    getRandomCocktail,
})(Main);
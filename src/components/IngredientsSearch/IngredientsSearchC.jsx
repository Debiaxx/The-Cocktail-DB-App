import {connect} from "react-redux";
import IngredientsSearch from "./IngredientsSearch";
import {getIngredientByName} from "../../redux/filterReducer";

let mapStateToProps = (state) => ({
    ingredient: state.filterReducer.ingredient
});

export default connect(mapStateToProps, {getIngredientByName})(IngredientsSearch);
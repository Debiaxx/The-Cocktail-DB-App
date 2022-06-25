import {connect} from "react-redux";
import ItemPage from "./ItemPage";
import {getCocktailInfoById} from "../../redux/filterReducer";

let mapStateToProps = (state) => ({
    cocktail: state.filterReducer.cocktail_info,
});

export default connect(mapStateToProps, {getCocktailInfoById})(ItemPage);

import AlphabetResultPage from "./AlphabetResultPage";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    result: state.filterReducer.byFirstLetter,
    letter: state.filterReducer.letter,
})

export default connect(mapStateToProps, {})(AlphabetResultPage);
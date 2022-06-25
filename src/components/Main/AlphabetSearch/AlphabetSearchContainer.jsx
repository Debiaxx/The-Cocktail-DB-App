import AlphabetSearch from "./AlphabetSearch";
import {connect} from "react-redux";
import {getResultByFirstLetter, setLetter} from "../../../redux/filterReducer";

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {getResultByFirstLetter, setLetter})(AlphabetSearch);
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainC from "./components/Main/MainC";
import CocktailsSearchC from "./components/CocktailsSearch/CocktailsSearchC";
import NavbarC from "./components/Navbar/NavbarC";
import AlphabetResultPageContainer
    from "./components/Main/AlphabetSearch/AlphabetResultPage/AlphabetResultPageContainer";
import ItemPageC from "./components/ItemPage/ItemPageC";
import IngredientsSearchC from "./components/IngredientsSearch/IngredientsSearchC";

function App() {
    return (
        <div className={'container'}>
            <NavbarC/>
            <Routes>
                <Route path={''} element={<MainC/>}/>
                <Route path={'/by-alphabet'} element={<AlphabetResultPageContainer/>}/>
                <Route path={'/search'} element={<CocktailsSearchC/>}/>
                <Route path={'/cocktail/:idDrink'} element={<ItemPageC/>}/>
                <Route path={'/ingredients'} element={<IngredientsSearchC/>}/>
            </Routes>
        </div>
    );
}

export default App;

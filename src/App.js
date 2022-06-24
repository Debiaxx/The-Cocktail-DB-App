import './App.css';
import {Route, Routes} from "react-router-dom";
import MainC from "./components/Main/MainC";
import CocktailsSearchC from "./components/CocktailsSearch/CocktailsSearchC";
import NavbarC from "./components/Navbar/NavbarC";

function App() {
    return (
        <div className={'container'}>
            <NavbarC/>
            <Routes>
                <Route path={''} element={<MainC/>}/>
                <Route path={'/search'} element={<CocktailsSearchC/>}/>
            </Routes>
        </div>
    );
}

export default App;

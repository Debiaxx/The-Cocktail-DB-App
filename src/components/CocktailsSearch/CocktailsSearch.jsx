import s from './CocktailsSearch.module.css';
import {useEffect} from "react";
import {Formik} from "formik";
import SearchForm from "../SearchForm/SearchForm";
import TitleArea from "../SearchForm/TitleArea/TitleArea";
import {NavLink} from "react-router-dom";

const title_image = "https://images.vexels.com/media/users/3/246333/isolated/lists/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png"

const CocktailsSearch = (props) => {
    useEffect(() => {
        props.getCategories();
        props.getAlcoholCocktails();
        props.getGlasses();
        props.getIngredients();
    }, [])

    let categories = props.categories.map(c => <option key={c.strCategory}>{c.strCategory}</option>);
    let glasses = props.glasses.map(g => <option key={Object.values(g)}>{Object.values(g)}</option>);
    let alcoholic_cocktails = props.alcoholic_cocktails.map(a =>
        <option key={Object.values(a)}>{Object.values(a)}</option>);
    let ingredients = props.ingredients.map(i => <option key={Object.values(i)}>{Object.values(i)}</option>);

    let result = props.result.length > 0 ? props.result : false;

    let cocktails = result ? result.map(r => <NavLink to={`/cocktail/${r.idDrink}`}>
        <div className={s.cocktail_item} key={r.idDrink}>
            <img className={s.image} src={r.strDrinkThumb} alt={''}/>
            <div className={s.name}>{r.strDrink}</div>
        </div>
    </NavLink>) : <div className={s.no_results}>No results</div>;

    let cocktails_total_count = result ? result.length : '0';

    let onFilterSubmit = (values) => {
        let special_ingredients = values.ingredients === "" ? 'none' : values.ingredients; // при запросе "" возвращается массив с 35 коктейлями, поэтому использую none
        let special_query = values.query === "" ? 'none' : values.query;
        props.setStartResultValue([])
        props.filterByCategory(values.category);
        props.filterByGlass(values.glass);
        props.filterByAlcohol(values.alco);
        props.filterByIngredients(special_ingredients);
        props.cocktailByName(special_query);
    }

    return (
        <div className={s.container}>
            <TitleArea title_image={title_image}/>
            <Formik
                initialValues={{query: '', category: '', glass: '', alco: '', ingredients: ''}}
                onSubmit={onFilterSubmit}>
                <SearchForm title_image={title_image} categories={categories} glasses={glasses}
                            alcoholic_cocktails={alcoholic_cocktails} ingredients={ingredients}/>
            </Formik>
            <div className={s.total_count}>total: {cocktails_total_count}</div>
            <div className={s.result_container}>{cocktails}</div>
        </div>
    )
}

export default CocktailsSearch;

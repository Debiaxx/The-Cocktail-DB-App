import s from './CocktailsSearch.module.css';
import {useEffect} from "react";
import {Formik} from "formik";
import SearchForm from "./SearchForm/SearchForm";
import filterOfFour from "./FilterFunctions/fourFilters";
import filterOfThree from "./FilterFunctions/threeFilters";
import filterOfTwo from "./FilterFunctions/twoFilters";
import filterOfOne from "./FilterFunctions/oneFilter";

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

    let by_category = props.by_category
    let by_alco = props.by_alco
    let by_glass = props.by_glass
    let by_ingredients = props.by_ingredients
    let by_query = props.by_query

    let full_filter = filterOfFour(by_category, by_glass, by_alco, by_ingredients) ? filterOfFour(by_category, by_glass, by_alco, by_ingredients) : false;
    let filter_three_combo_result =
        filterOfThree(by_alco, by_glass, by_ingredients, by_category) ? filterOfThree(by_alco, by_glass, by_ingredients, by_category) : filterOfThree(by_category, by_glass, by_ingredients, by_alco) ? filterOfThree(by_category, by_glass, by_ingredients, by_alco) : filterOfThree(by_category, by_alco, by_ingredients, by_glass) ? filterOfThree(by_category, by_alco, by_ingredients, by_glass) : filterOfThree(by_category, by_alco, by_glass, by_ingredients) ? filterOfThree(by_category, by_alco, by_glass, by_ingredients) : false;
    let filter_two_combo_result =
        filterOfTwo(by_category, by_ingredients, by_glass, by_alco) ? filterOfTwo(by_category, by_ingredients, by_glass, by_alco) :
            filterOfTwo(by_category, by_glass, by_ingredients, by_alco) ? filterOfTwo(by_category, by_glass, by_ingredients, by_alco) : filterOfTwo(by_category, by_alco, by_ingredients, by_glass) ? filterOfTwo(by_category, by_alco, by_ingredients, by_glass) : filterOfTwo(by_glass, by_alco, by_category, by_ingredients) ? filterOfTwo(by_glass, by_alco, by_category, by_ingredients) : filterOfTwo(by_alco, by_ingredients, by_glass, by_category) ? filterOfTwo(by_alco, by_ingredients, by_glass, by_category) : filterOfTwo(by_ingredients, by_glass, by_category, by_alco) ? filterOfTwo(by_ingredients, by_glass, by_category, by_alco) : false;
    let filter_one_combo_result =
        filterOfOne(by_category, by_glass, by_alco, by_ingredients) ? filterOfOne(by_category, by_glass, by_alco, by_ingredients) :
            filterOfOne(by_glass, by_category, by_ingredients, by_alco) ? filterOfOne(by_glass, by_category, by_ingredients, by_alco) :
                filterOfOne(by_alco, by_category, by_glass, by_ingredients,) ? filterOfOne(by_alco, by_category, by_glass, by_ingredients,) :
                    filterOfOne(by_ingredients, by_glass, by_category, by_alco) ? filterOfOne(by_ingredients, by_glass, by_category, by_alco) : false;

    let filters_result = full_filter ? full_filter :
        filter_one_combo_result ? filter_one_combo_result :
            filter_two_combo_result ? filter_two_combo_result :
                filter_three_combo_result ? filter_three_combo_result : false

    let query_result = by_query ? by_query : false;

    let result = filters_result ?
        filters_result.filter(fr => query_result ? query_result.some(qr => qr.idDrink === fr.idDrink) : fr) :
        query_result ?
            query_result.filter(qr => filters_result ? filters_result.some(fr => fr.idDrink === qr.idDrink) : qr) :
            false;

    let cocktails = result ? result.map(r => <div className={s.cocktail_item} key={r.idDrink}>
        <img className={s.image} src={r.strDrinkThumb} alt={''}/>
        <div className={s.name}>{r.strDrink}</div>
    </div>) : <div className={s.no_results}>No results</div>;

    let cocktails_total_count = result ? result.length : '0';

    let onFilterSubmit = (values) => {
        let special_ingredients = values.ingredients === "" ? 'none' : values.ingredients; // при запросе "" возвращается массив с 35 коктейлями, поэтому использую none
        let special_query = values.query === "" ? 'none' : values.query;
        props.filterByCategory(values.category);
        props.filterByGlass(values.glass);
        props.filterByAlcohol(values.alco);
        props.filterByIngredients(special_ingredients);
        props.cocktailByName(special_query);
    }

    return (
        <div className={s.container}>
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

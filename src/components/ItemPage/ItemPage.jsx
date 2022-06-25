import {useParams} from "react-router-dom";
import {useEffect} from "react";
import s from "../Main/Main.module.css";
import style from './ItemPage.module.css'
import TitleArea from "../SearchForm/TitleArea/TitleArea";

const title_image = "https://images.vexels.com/media/users/3/246333/isolated/lists/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png"

const ItemPage = (props) => {
    let {idDrink} = useParams()
    useEffect(() => {
        props.getCocktailInfoById(idDrink);
    }, [])
    let cocktail = props.cocktail;

    let ingredients = [];
    for (let [key, value] of Object.entries(cocktail)) {
        if (key.slice(0, 13) === 'strIngredient') {
            ingredients = [...ingredients, value];
        }
    }
    ingredients = ingredients.filter(i => i !== null && i !== '')

    let measures = [];
    for (let [key, value] of Object.entries(cocktail)) {
        if (key.slice(0, 10) === 'strMeasure') {
            measures = [...measures, value];
        }
    }
    measures = measures.filter(m => m !== null && m !== '')

    let recipe = [];
    for (let i = 0; i < ingredients.length; i++) {
        recipe = [...recipe, {ingredient: ingredients[i], measure: measures[i]}]
    }
    recipe = recipe.map(r => <div className={style.recipe_item} key={r.ingredient}>
        <img className={style.ingredient_image}
             src={`https://www.thecocktaildb.com/images/ingredients/${r.ingredient}.png`}
             alt='🍸'/>
        <div className={style.ingredient_name}>{r.ingredient}</div>
        <div className={style.ingredient_measure}>{r.measure}</div>
    </div>)
    return (
        <div className={s.container}>
            <TitleArea title_image={title_image}/>
            <div className={style.name}>{cocktail.strDrink}</div>
            <div className={style.info_n_image_container}>
                <img className={style.image} src={cocktail.strDrinkThumb} alt=""/>
                <div className={style.info_container}>
                    <div className={style.alco}>Alcoholic: {cocktail.strAlcoholic}</div>
                    <div className={style.category}>Category: {cocktail.strCategory}</div>
                    <div className={style.glass}>Glass: {cocktail.strGlass}</div>
                    <div className={style.instruction}>Instruction: {cocktail.strInstructions}</div>
                </div>
            </div>
            <div className={style.recipe_title}>Recipe</div>
            <div className={style.recipe}>{recipe}</div>
        </div>
    )
}
export default ItemPage;
import s from './Main.module.css';
import TitleArea from "../SearchForm/TitleArea/TitleArea";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

const title_image = "https://images.vexels.com/media/users/3/246333/isolated/lists/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png"


const Main = (props) => {
    useEffect(() => {
        props.getPopularCocktails()
        props.getLatestCocktails()
    }, [])

    let popular_cocktails = props.popular_cocktails.map(pc => <div className={s.item} key={pc.idDrink}>
        <img className={s.image} src={pc.strDrinkThumb} alt=""/>
        <div className={s.name}>{pc.strDrink}</div>
    </div>).splice(0, 8);

    let latest_cocktails = props.latest_cocktails.map(lc => <div className={s.item} key={lc.idDrink}>
        <img className={s.image} src={lc.strDrinkThumb} alt=""/>
        <div className={s.name}>{lc.strDrink}</div>
    </div>).splice(0, 8)

    let onRandomCocktail = () => {
        props.getRandomCocktail();
    }

    let random_drink = props.random_cocktail;

    let ingredients = [random_drink.strIngredient1, random_drink.strIngredient2, random_drink.strIngredient3, random_drink.strIngredient4, random_drink.strIngredient5, random_drink.strIngredient6, random_drink.strIngredient7, random_drink.strIngredient8, random_drink.strIngredient9, random_drink.strIngredient10, random_drink.strIngredient11, random_drink.strIngredient12, random_drink.strIngredient13, random_drink.strIngredient14, random_drink.strIngredient15].filter(i => i !== null && i != '');

    let measure = [random_drink.strMeasure1, random_drink.strMeasure2, random_drink.strMeasure3, random_drink.strMeasure4, random_drink.strMeasure5, random_drink.strMeasure6, random_drink.strMeasure7, random_drink.strMeasure8, random_drink.strMeasure9, random_drink.strMeasure10, random_drink.strMeasure11, random_drink.strMeasure12, random_drink.strMeasure13, random_drink.strMeasure14, random_drink.strMeasure15].filter(m => m !== null && m != '');

    let reciepe_key = Math.floor(Math.random() * 50);
    console.log(reciepe_key)

    let recipe = [];
    for (let i = 0; i < ingredients.length; i++) {
        recipe = [...recipe, {ingredient: ingredients[i], measure: measure[i]}]
    }
    console.log(recipe)
    recipe = recipe.map(r => <div className={s.item} key={r.ingredient + reciepe_key}>
        <img className={s.ingredient_image} src={`https://www.thecocktaildb.com/images/ingredients/${r.ingredient}.png`}
             alt='🍸'/>
        <div className={s.name}>{r.ingredient}</div>
        <div className={s.measure}>{r.measure}</div>
    </div>)

    return (<div className={s.container}>
        <TitleArea title_image={title_image}/>
        <hr/>
        <div className={s.section_title}>Popular cocktails</div>
        <div className={s.list_section}>{popular_cocktails}</div>
        <hr/>
        <div className={s.section_title}>Latest cocktails</div>
        <div className={s.list_section}>{latest_cocktails}</div>
        <hr/>
        <div className={s.section_title}>Random cocktail</div>

        <div className={s.random}>

            <button className={s.button} onClick={onRandomCocktail}>Random Cocktail</button>

            {Object.keys(random_drink).length !== 0 ?
                <div className={s.random_container}>
                    <div className={s.random_cocktail_item}>
                        <img className={s.random_cocktail_image} src={random_drink.strDrinkThumb} alt=""/>
                        <div className={s.random_cocktail_name}>{random_drink.strDrink}</div>
                    </div>
                    <div className={s.random_cocktail_info}>
                        <div className={s.test}>Category: {random_drink.strCategory}</div>
                        <div className={s.test}>Alcoholic: {random_drink.strAlcoholic}</div>
                        <div className={s.test}>Glass: {random_drink.strGlass}</div>
                        <div className={s.test}>Glass: {random_drink.strGlass}</div>
                        <div className={s.test}>Instruction: {random_drink.strInstructions}</div>
                    </div>
                    <div className={s.random_cocktail_item}>
                        <div className={s.section_title}>Recipe:</div>
                        <div className={s.list_section}>{recipe}</div>
                    </div>
                </div> : <></>}
        </div>

        <hr/>
        <div>by first letter</div>
        <hr/>
    </div>)
}

export default Main;
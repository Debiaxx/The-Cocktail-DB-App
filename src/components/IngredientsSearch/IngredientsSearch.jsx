import native_style from './IngredientsSearch.module.css'
import s from '../CocktailsSearch/CocktailsSearch.module.css'
import style from '../ItemPage/ItemPage.module.css'
import TitleArea from "../SearchForm/TitleArea/TitleArea";
import {Formik, Field, Form} from "formik";
import QueryForm from "../SearchForm/QueryForm/QueryForm";

const IngredientsSearch = (props) => {
    let onSubmit = (values) => {
        let query = values.query === '' ? 'none' : values.query;
        props.getIngredientByName(query)
    }

    let ingredient = props.ingredient.length === 0 ? false : typeof props.ingredient === 'object' ? props.ingredient : false;

    return (
        <div className={s.container}>
            <TitleArea/>
            <Formik
                initialValues={{query: ''}}
                onSubmit={onSubmit}
            >
                <Form>
                    <QueryForm/>
                </Form>
            </Formik>
            {ingredient ?
                <div>
                    <div className={style.name}>{ingredient.strIngredient}</div>
                    <div className={style.info_n_image_container}>
                        <img className={style.image}
                             src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}.png`}
                             alt="none"/>
                        <div className={style.info_container}>
                            <div>Type: {ingredient.strType}</div>
                            <div>Alcohol: {ingredient.strAlcohol}</div>
                            <div>ABV: {ingredient.strABV}</div>
                        </div>
                    </div>
                    <div className={native_style.description_title}>Description</div>
                    <div className={native_style.description}>{ingredient.strDescription}</div>
                </div> : <div style={{textAlign: 'center', width: '90px'}} className={s.no_results}>No results</div>}
        </div>
    )
}

export default IngredientsSearch;
import s from "../../CocktailsSearch/CocktailsSearch.module.css";
import {Field} from "formik";

const SelectsForm = (props) => {
    return (
        <div className={s.filters_container}>
            <div className={s.filter_container}>
                <label htmlFor="category">Category</label>
                <Field as={'select'} name={'category'}>
                    <option value=""/>
                    {props.categories}
                </Field>
            </div>
            <div className={s.filter_container}>
                <label htmlFor="glass">Glass</label>
                <Field as={'select'} name={'glass'}>
                    <option value=""/>
                    {props.glasses}
                </Field>
            </div>
            <div className={s.filter_container}>
                <label htmlFor="alco">Alcoholic</label>
                <Field as={'select'} name={'alco'}>
                    <option value=""/>
                    {props.alcoholic_cocktails}
                </Field>
            </div>
            <div className={s.filter_container}>
                <label htmlFor="ingredients">Ingredients</label>
                <Field as={'select'} name={'ingredients'}>
                    <option value=""/>
                    {props.ingredients}
                </Field>
            </div>
        </div>
    );
}

export default SelectsForm;
import {Field, Form} from "formik";
import s from "../CocktailsSearch/CocktailsSearch.module.css";
import SelectsForm from "./SelectsForm/SelectsForm";
import QueryForm from "./QueryForm/QueryForm";
import TitleArea from "./TitleArea/TitleArea";

const SearchForm = (props) => {
    return (
        <Form className={s.form_container}>
            <div className={s.form}>
                <QueryForm/>
                <SelectsForm categories={props.categories} glasses={props.glasses}
                             alcoholic_cocktails={props.alcoholic_cocktails} ingredients={props.ingredients}/>
            </div>
        </Form>
    )
}

export default SearchForm;
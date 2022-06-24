import s from "../../CocktailsSearch/CocktailsSearch.module.css";
import {Field} from "formik";

const QueryForm = (props) => {
    return (
        <div className={s.query_container}>
            <Field type={'text'} name={'query'} autoComplete={'off'}/>
            <button className={s.button}>Submit</button>
        </div>
    )
}

export default QueryForm;
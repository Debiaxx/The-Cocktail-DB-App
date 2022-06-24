import s from "../../CocktailsSearch/CocktailsSearch.module.css";

const TitleArea = (props) => {
    return (<div className={s.title_container}>
        <div className={s.title}>The Cocktail DB</div>
        <img className={s.title_image}
             src={props.title_image}
             alt=""/>
    </div>);
}

export default TitleArea;
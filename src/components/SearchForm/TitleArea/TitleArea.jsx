import s from "../../CocktailsSearch/CocktailsSearch.module.css";

const title_image = "https://images.vexels.com/media/users/3/246333/isolated/lists/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png"

const TitleArea = (props) => {
    return (<div className={s.title_container}>
        <div className={s.title}>The Cocktail DB</div>
        <img className={s.title_image}
             src={title_image}
             alt=""/>
    </div>);
}

export default TitleArea;
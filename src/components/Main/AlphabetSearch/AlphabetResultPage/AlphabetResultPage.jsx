import {NavLink} from "react-router-dom";
import s from '../../Main.module.css'
import TitleArea from "../../../SearchForm/TitleArea/TitleArea";

const title_image = "https://images.vexels.com/media/users/3/246333/isolated/lists/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png"


const AlphabetResultPage = (props) => {

    let result = props.result.map(r => <NavLink to={`/cocktail/${r.idDrink}`}>
        <div className={s.item} key={r.idDrink}>
            <img className={s.image} src={r.strDrinkThumb} alt=""/>
            <div className={s.name}>{r.strDrink}</div>
        </div>
    </NavLink>)

    return (
        <div className={s.container}>
            <TitleArea title_image={title_image}/>
            <div style={{
                textAlign: 'center',
                fontSize: '30px',
                fontWeight: 'bold',
                background: 'hotpink',
                borderRadius: '5px',
                color: 'white',
                textShadow: '0 0 5px deeppink'
            }} className={s.letter}>{props.letter}</div>
            <div className={s.list_section}>
                {result}
            </div>
        </div>
    )
}

export default AlphabetResultPage;
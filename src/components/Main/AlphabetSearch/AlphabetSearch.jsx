import {NavLink} from "react-router-dom";
import s from './AlphabetSearch.module.css'

const AlphabetSearch = (props) => {

    let onClick = (letter) => {
        props.getResultByFirstLetter(letter)
        props.setLetter(letter);
    }

    let NavLinks = (letter) => {
        return (
            <>
                <NavLink className={s.letter} onClick={() => onClick(letter)} to={'/by-alphabet'}>{letter}</NavLink>
            </>
        )
    }

    let letters = [];
    let str;
    for (let i = 0; i < 26; i++) {
        str = String.fromCharCode(65 + i)
        letters = [...letters, str];
    }
    letters = letters.map(l => <span key={l}>{NavLinks(l)}</span>);

    return (<div className={s.container}>
        <div className={s.title_by_alphabet}>By Alphabet</div>
        {letters}
    </div>)
}

export default AlphabetSearch;
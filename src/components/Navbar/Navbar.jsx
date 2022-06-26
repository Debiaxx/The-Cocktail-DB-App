import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.navbar_container}>
            <NavLink to={''}>Main</NavLink>
            <NavLink to={'/search'}>Cocktails</NavLink>
            <NavLink to={'/ingredients'}>Ingredients</NavLink>
        </div>)
}

export default Navbar;
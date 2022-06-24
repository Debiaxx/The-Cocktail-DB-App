import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.navbar_container}>
            <NavLink to={''}>Main</NavLink>
            <NavLink to={'/search'}>Search</NavLink>
        </div>)
}

export default Navbar;
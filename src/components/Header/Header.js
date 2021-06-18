import React, {useEffect} from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    // useEffect(() => {
    //     props.getAuthUserData();
    // }, [])
    return <header className={s.header}>
        <img src={logo}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
            : <NavLink className={s.loginText} to={'/login'}>Login</NavLink>}
        </div>

    </header>

}

export default Header;
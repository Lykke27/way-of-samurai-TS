import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

type PropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props:PropsType) => {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebarLinks}>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/users" activeClassName={style.activeLink}>Find Users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
                </div>
            </div>
            <div className={`${style.item} ${style.login}`}>
                {props.isAuth
                    ? <NavLink to="/profile">{props.login}</NavLink>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;
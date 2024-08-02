import React from "react";
import s from './friend.module.css';
import {NavLink} from 'react-router-dom';

const Friend = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.friend}>
            <NavLink to={path}>
                <div className={s.friend_avatar}></div>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Friend;

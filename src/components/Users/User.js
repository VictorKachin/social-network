import React from "react";
import s from "./Users.module.css";
import avaPhoto from "../../assets/images/ava007_01.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.wrapper}>
        <span>
            <div className={s.userImg}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : avaPhoto} alt='ava'/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button className={s.following}
                              disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow
                    </button>

                    : <button className={s.following}
                              disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow
                    </button>}
            </div>
        </span>
        <span>
            <span>
                <div className={s.fullName}>
                    {user.name}
                </div>
                <div className={s.status}>
                    {user.status}
                </div>
                <div className={s.status}>
                    Id: {user.id}
                </div>
            </span>
            <span>
                <div className={s.locCountry}>
                    {'user.location.country'}
                </div>
                <div className={s.locCity}>
                    {'user.location.city'}
                </div>
            </span>
        </span>
    </div>
}
export default User;
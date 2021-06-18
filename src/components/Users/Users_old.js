import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/ava007_01.png'

let Users_old = (props) => {

    let getUsers = () => {


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }
}

return (<div className={s.wrapper}>
        <button onClick={getUsers}>Get All Users</button>

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.userImg}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            {/*<img src='../../../images/avaDimych_01.jpg'/>*/}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>
                            <div className={s.fullName}>
                                {u.name}
                            </div>
                            <div className={s.status}>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div className={s.locCountry}>
                                {'u.location.country'}
                            </div>
                            <div className={s.locCity}>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>

            </div>)
        }
    </div>
)
}

export default Users_old;

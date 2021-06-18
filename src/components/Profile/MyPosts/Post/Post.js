import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (<div className={s.content}>

            <div className={s.item}>
                <img src='https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg'
                     alt=""/>
                <div className={s.post}>
                    {props.message}
                </div>
                <div className={s.counter}>
                    <div className={s.likeButton}>
                        <button>Like</button>
                    </div>
                    <span>Likes: </span> {props.likesCount}
                </div>
            </div>

        </div>
    )
}

export default Post;

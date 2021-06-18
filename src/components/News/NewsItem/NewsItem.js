import React from 'react';
import s from './NewsItem.module.css'

const NewsItem = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.newsText}>
                    {props.newNews}
                </div>
                <div className={s.likesHere}>
                    <span>Likes &#128077; </span>
                    <span className={s.likesCount}>{props.likes}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
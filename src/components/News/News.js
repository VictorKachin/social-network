import React from 'react'
import s from './News.module.css';
import NewsItem from "./NewsItem/NewsItem";
import {Field, reduxForm} from "redux-form";
import {useHistory} from "react-router-dom";

const News = (props) => {
    const newsElements = props.news.map(n => <NewsItem newNews={n.newsText} likes={n.likesCount} key={n.id}/>);

    //HOOK !!!!!!!!!!!
    // const history = useHistory();

    const onAddNews = (values) => {
        props.addNews(values.newNewsText);
        // let path = '/profile'
        // history.push(path)
    }

    return (
        <div className={s.content}>
            <h2>News here:</h2>
            <div className={s.addingField}>
                <AddNewNewsReduxForm onSubmit={onAddNews}/>
            </div>
            {newsElements}
        </div>
    )
}
const addNewNewsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'newNewsText'}
                placeholder={'New NEWS HERE!'}
            />
            <div>
                <button>Add NEWS</button>
            </div>
        </form>
    )
}

const AddNewNewsReduxForm = reduxForm({form: 'ProfileAddNewNewsForm'})(addNewNewsForm)

export default News;
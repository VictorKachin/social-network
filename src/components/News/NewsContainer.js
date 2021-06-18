import React from 'react';
import {connect} from "react-redux";
import News from "./News";
import {addNewsActionCreator} from "../../redux/news-reducer";

let mapStateToProps = (state) => {
    return {
        news: state.newsPages.news,
        newNewsText: state.newsPages.newNewsText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       addNews: (newNewsText) => {
            dispatch(addNewsActionCreator(newNewsText));
        }
    }
}

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News)

export default NewsContainer;
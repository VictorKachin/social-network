import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";

import NewsContainer from "./components/News/NewsContainer";

import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import ('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import ('./components/Login/Login'));


// сделали классовой и componentDidMount пренесли из HeaderContainer 80 Урок
class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='s.app-wrapper-content'>

                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/users' render={withSuspense(UsersContainer)} />
                    <Route path='/login' render={withSuspense(LoginPage)} />

                    <Route path='/news' render={() => <NewsContainer/>}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

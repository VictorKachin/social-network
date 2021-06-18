import React from 'react';
import s from './../common/FormsControl/FormControl.module.css'
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
// HOC
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        // из props вызвали login, который приходит сюда благодаря connect
        // callback принимает параметры в скобках ()
        // и потом диспатчит вызов thunk-creator-a {login} в connect-e
        // а потом в этот thunk-creator передаются эти же параметры, которые передаются в callback
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth)
        return <Redirect to={'/profile'}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// в этой точке login является thunk-creator-ом (Урок 78 = 19:20)
export default connect(mapStateToProps, {login})(Login);
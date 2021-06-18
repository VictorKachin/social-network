import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
//HOC для РЕДИРЕКТА на Login, если не пользователь не залогился
// когда мы вызываем HOC withAuthRedirect, то получаем ДВЕ конт.комп-ты, одна в другой:
// withAuthRedirect коннектится к стору и забирает значение isAuth

export const withAuthRedirect = (Component) => {

    //создаем 1-ю контейнерную компоненту
    class RedirectComponent extends React.Component {
        render() {
            //Redirect? если не залогинен при переходе
            // на страницы Users и Messages
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

//1-ю оборачивем 2-й конт.компонентой, connect оборачивает и коннектит к стору
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

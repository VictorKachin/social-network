import React from 'react';
import {sendMessagesCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//Урок 45 = 14:05
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

//диспатчили ( mapDispatchToProps = (dispatch) ) то, что нам вернет ф-ция sendMessagesCreator()
// сейчас принимаем newMessageBody - сформированное, написанное сообщение
// и далее передаём newMessageBody в action-creator sendMessagesCreator и указываем его в dialog-reducer

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessagesCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


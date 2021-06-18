import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

// ПОЛЕ ВВОДА СООБЩЕНИЯ И КНОПКА
    let newPostElement = React.createRef ();

    let addPost = () => {
        let mess = newPostElement.current.value;
        alert (mess)
    }

    return (
        <div className={s.messagesBlock}>
            <div className={s.currentMessage}>
                {props.message}
            </div>

            {/*//ПОЛЕ ВВОДА СООБЩЕНИЯ И КНОПКА*/}
                <textarea ref={newPostElement}> </textarea>

            <div className={s.addButton}>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
    )
}

export default Message;


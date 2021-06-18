import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    // useState возвращает массив из 2-х элементов
    // let stateWithSetState = useState(true);

    // editMode - 1-й элемент этого массива со значением false
    // let editMode = stateWithSetState[0];
    // 2-м элементом - ф-ция, которая изменяет именно одиночное значение editMode
    // let setEditMode = stateWithSetState[1];

    // т.о. мы спректировали выше useState
    // который говорит: "я верну тебе массив, 1-м элементом, в этом массиве, сидит значение
    // 2-м - функция, которая это значение устанавливает

    // или (применяя ДЕСТРУКТУРИЗАЦИЮ):
// ... вызываем hook для изменения режима редактирования - <span> на <input>
    let [editMode, setEditMode] = useState(false)

    // ... вызываем hook для изменения  и сохранения статуса
    let [status, setStatus] = useState(props.status)

    // "...закиньте в меня ф-ию, которую я выполню, когда произойдёт отрисовка"
    // т.е. засинхронизировать, когда компонента отрисовалась, теми данными, кот-е пришли из пропсов
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    // меняет <span> на <input>
    const activateEditMode = () => {
        setEditMode(true);
    }

    // деактивирует <input> и возвращает <span>
    const deactivateEditMode = () => {
        setEditMode(false)
        // отправляем на сервер новое изменение статуса
        props.updateStatus(status);
    }
// печатаем букву и сетаем статус (setStatus), т.е меняем локальный стейт
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.userStatus}>Статус:</div>

            {!editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || 'you status here'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       value={status}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       type="text"/>
            </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;
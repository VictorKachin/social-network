import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    //(Ур.71) создаём ЛОКАЛЬНЫЙ СТЕЙТ (state)!!!
    state = {
        editMode: false,
        //статус в локальном стейте берет значения из пропсов* (Ур.73)
        status: this.props.status
    }
        //создаём МЕТОД для нашей КЛАССОВОЙ компоненты (Ур.71)
    activateEditMode = () => {
        //..и меняем editMode с false на true, т.е. меняет <span> на <input>
        //при помощи метода setState (асинхронно) из React.Component
        this.setState({
            editMode: true
        })
    }
    //то же самое, только действие ДеАктивируется (Ур.71)
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        //обновляем статус после ДеАктивации - запрс на сервер* (Ур.73)
            //и отобразит на странице

    }

//если зафиксирован value, то создаётся onChange...
    // локальный стейт меняется при каждом напечатывании символа
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value //узнаём новое значение и сетаем в статус (новое свойство передаём
                                        // в локальный стейт именно в статус
        })
    }
// Урок 74
    // ... метод жизненного цикла, который срабатывает при любом изменении либо props-ов извне, либо локального стейта
    //
    componentDidUpdate(prevProps,prevState) {
        // ...и если в пропсах был один стейт, а потом стал другой, то, значит, изменились пропсы и нам эти пропсы надо закинуть
        // в локальный стейт, чтобы стейт синхонизировался с теми пропсами, что пришли извне
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
            // debugger;
            // let a = this.props;
            // let b = this.state;
        }
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div className={s.wrapper}>

                <div className={s.userStatus}>Статус: </div>
                {/*(Ур.71) если editMode == true, то  */}
                {!this.state.editMode &&
                //..то отобразится этот span (Ур.71)
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'you status here'}</span>
                    {/* здесь же показываем стейт из пропсов, т.к. сервер еще не обновился*/}
                </div>
                }

                {/*(Ур.71) если editMode == false, то  */}
                {this.state.editMode &&
                    //..отобразится эта div-ка (Ур.71)
                     <div>
                            <input onChange={this.onStatusChange} //если зафиксирован value, то создаётся onChange
                                   autoFocus={true} //когда input активируется, он заберёт вокус на себя (Ур.71)
                                   onBlur={ this.deactivateEditMode.bind(this) } //событие onBlur срабатывает,(Ур.71)
                                                                                // когда фокус в элементе, а потом
                                                                                 // этот фокус выходит из элемента
                                //показываем  статус не из пропсов а из лакального стейта**
                                   value={this.state.status} type="text"/>
                     </div>
                }


            </div>

        )
    }
}

export default ProfileStatus;
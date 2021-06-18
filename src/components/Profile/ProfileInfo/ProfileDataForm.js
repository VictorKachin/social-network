import React from 'react';
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControl/FormControl";
import {reduxForm} from "redux-form";

// Урок 97

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            {/*<div>*/}
            {/*    <button>save</button>*/}
            {/*</div>*/}

            <div className={s.userFullName}>
                Full name:
                {createField('Full Name', 'fullName', [], Input)}
            </div>

            <div className={s.myStatusItem}>
                Looking for a job:
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>

            <div className={s.myStatusItem}>
                My hard skills: {createField('Hard Skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div className={s.myStatusItem}>
                About me: {createField('About Me', 'aboutMe', [], Textarea)}
            </div>
            {/*<div className={s.contacts}>*/}
            {/*    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {*/}
            {/*        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*    }*/}
            {/*)}*/}
            {/*</div>*/}

            <div>
                <button>save</button>
            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
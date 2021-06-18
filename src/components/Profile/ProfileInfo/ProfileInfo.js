import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {Spring} from 'react-spring/renderprops';
import avaPhoto from "../../../assets/images/ava007_01.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

let ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.mainPic}>
                <img
                    src='https://globalvaluechains.org/sites/globalvaluechains.org/files/pictures/banner_researchers_1200x300.png'/>
            </div>
            <div className={s.descriptionBlock}>

                <Spring
                    from={{opacity: 0, transform: 'translateX(-5rem)'}}
                    to={{opacity: 1, transform: 'translateX(0rem)'}}
                    config={{duration: 1000}}
                >
                    {(springProps) => (<img style={springProps}
                                            src={profile.photos.large != null ? profile.photos.large : avaPhoto}/>)}

                </Spring>

                {/*<img src={props.profile.photos.large}/>*/}
                {/*<img src={props.profile.photos.large != null ? props.profile.photos.large : avaPhoto}/>*/}

                <div className={s.changePhoto}>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}
                    />
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (<div>
            {isOwner && <div><button onClick={goToEditMode}>Edit Profile</button></div>}
            <div className={s.userFullName}>
               {profile.fullName}
            </div>

            <div className={s.myStatusItem}>
                Looking for a job: <span>{profile.lookingForAJob ? '< Yes />=' : '< No />'}</span>
            </div>
            {profile.lookingForAJob &&
            <div className={s.myStatusItem}>
                My hard skills: {profile.lookingForAJobDescription}
            </div>
            }
            <div className={s.myStatusItem}>
                About me: {profile.aboutMe}
            </div>
            <div className={s.contacts}>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
            )}
            </div>

            <div className={s.status}>
                <span>User Id: </span>
                <span className={s.userIdNum}>{profile.userId}</span>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactItem}>
            {contactTitle}: {contactValue}
        </div>
    )

}

export default ProfileInfo;
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormControl";


const MyPosts = React.memo(props => {
    console.log("RENDER")

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
           <Field
               component={Textarea}
               validate={[required, maxLength10]}
               name={'newPostText'}
               placeholder={'New POST HERE'}
           />
           <div>
               <button>Add post</button>
           </div>
       </form>
   )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm)

export default MyPosts;
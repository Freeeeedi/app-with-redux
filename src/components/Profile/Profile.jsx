import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <img alt="" className={style.firstScreen__img} src='https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg' />
            <div>
                ava + desc
            </div>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
        </div>
    );
}
export default Profile;
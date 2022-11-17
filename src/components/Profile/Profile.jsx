import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <img alt="" className={style.firstScreen__img} src='https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg' />
            <div>
                ava + desc
            </div>
            <MyPostsContainer store={props.store} />
        </div>
    );
}
export default Profile;
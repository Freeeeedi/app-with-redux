import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://cdn1.iconfinder.com/data/icons/society-profession-avatar/1024/Society_Profession_Avatar_I-27-512.png" alt="" />
            {props.text}
            <div>
                {props.likesCount > 1 ? props.likesCount + ' likes' : props.likesCount + ' like'}
            </div>
        </div>
    );
}
export default Post;
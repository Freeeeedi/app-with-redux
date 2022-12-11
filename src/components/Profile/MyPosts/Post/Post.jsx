import style from './Post.module.css';
import { React } from 'react';

class Post extends React.Commponent {
    render() {
        return (
            <div className={style.item}>
                <img src="https://cdn1.iconfinder.com/data/icons/society-profession-avatar/1024/Society_Profession_Avatar_I-27-512.png" alt="" />
                {this.props.text}
                <div>
                    {this.props.likesCount > 1 ? this.props.likesCount + ' likes' : this.props.likesCount + ' like'}
                </div>
            </div>
        );
    }
}
export default Post;
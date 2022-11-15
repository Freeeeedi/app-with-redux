import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' />
        </header>
    );
}
export default Header;
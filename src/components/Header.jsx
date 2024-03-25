import classes from '../UI/Header.module.css';

const Header = ({aboutRef, projectsRef, contactsRef}) => {

    return (
        <div className={classes.header}>
            <div onClick={() => {
                aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}>Обо мне</div>
            <div onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Проекты</div>
            <div onClick={() => {
                contactsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}>Контакты</div>
        </div>
    );
};

export default Header;
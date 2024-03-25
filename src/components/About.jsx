import React from 'react';
import BlockTitle from './BlockTitle';
import classes from '../UI/About.module.css';
import react_icon from '../source/skill-icons/react-icon.png';
import js_icon from '../source/skill-icons/js-icon.png';
import django_icon from '../source/skill-icons/django-icon.png';
import css_icon from '../source/skill-icons/css-icon.png';
import pg_icon from '../source/skill-icons/pg-icon.png';
import html_icon from '../source/skill-icons/html-icon.png';

const About = ({aboutRef}) => {
    return (
        <div id='about' ref={aboutRef} className={classes.about}>
            <BlockTitle title={'обо мне'}/>
            <div className={classes.columns}>
                <div className={classes.column}>
                    <p>Привет! Меня зовут Алексей Гераськин, я&nbsp;front-end разработчик. 
                        Активно занимаюсь созданием веб&nbsp;-&nbsp;приложений, лендингов, сайтов портфолио, каталогов и&nbsp;др. 
                        Уверенно владею такими средствами разработки, как JavaScript, React JS, HTML, CSS, Python Django 
                        и&nbsp;PostgreSQL. В&nbsp;портфолио представлены мои студенческие и&nbsp;коммерческие проекты. 
                        С&nbsp;удовольствием займусь вашим сайтом и&nbsp;буду рад сотрудничеству!
                    </p>
                </div>
                <div className={classes.column}>
                    <div><img src={react_icon} alt="" /></div>
                    <div><img src={js_icon} alt="" /></div>
                    <div><img src={django_icon} alt="" /></div>
                    <div><img src={css_icon} alt="" /></div>
                    <div><img src={pg_icon} alt="" /></div>
                    <div><img src={html_icon} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default About;
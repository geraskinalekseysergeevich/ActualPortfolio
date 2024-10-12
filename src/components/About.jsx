import React from 'react';
import BlockTitle from './BlockTitle';
import classes from '../UI/About.module.css';
import react_icon from '../source/skill-icons/react-icon.svg';
import js_icon from '../source/skill-icons/js-icon.svg';
import django_icon from '../source/skill-icons/django-icon.svg';
import css_icon from '../source/skill-icons/css-icon.svg';
import pg_icon from '../source/skill-icons/pg-icon.svg';
import html_icon from '../source/skill-icons/html-icon.svg';

const About = ({aboutRef}) => {
    return (
        <div id='about' ref={aboutRef} className={classes.about}>
            <BlockTitle title={'обо мне'}/>
            <div className={classes.columns}>
                <div className={classes.column}>
                    <p>Привет! Меня зовут Алексей Гераськин, я&nbsp;frontend разработчик. 
                        Активно занимаюсь созданием веб-приложений, лендингов, сайтов портфолио, каталогов и&nbsp;др. 
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
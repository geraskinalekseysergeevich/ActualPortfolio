import { useEffect, useRef, useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import NavLocation from './components/NavLocation';
import ProjectsBlock from './components/ProjectsBlock';
import SideLinks from './components/SideLinks';
import StartText from './components/StartText';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {

    const [scrollPosition, setScrollPosition] = useState(0)
    const [currentSection, setCurrentSection] = useState('главная')
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null)

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Inter', 'Gilroy']
          }
        });
       }, []);

    useEffect(() => {
        const handleScroll = () => {
            const newPosition = window.scrollY
            setScrollPosition(window.scrollY);

            if (newPosition < 300) {
                setCurrentSection('главная');
            } else if (newPosition >= 300 && newPosition < 900) {
                setCurrentSection('обо мне');
            } else if (newPosition >= 900 && newPosition < 3700) {
                setCurrentSection('проекты');
            } else if (newPosition > 3700) {
                setCurrentSection('контакты')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='app__container'>
            <Header aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
            <SideLinks/>
            <NavLocation currentSection={currentSection}/>
            <StartText/>
            <About aboutRef={aboutRef}/>
            <ProjectsBlock projectsRef={projectsRef}/>
            <Contacts contactsRef={contactsRef}/>
            <Footer/>
        </div>
    );
}

export default App;
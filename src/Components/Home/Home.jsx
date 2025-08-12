import React from 'react';
import AboutSection from './AboutSection';
import About from './About';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import ProjectSection from '../ProjectSection/ProjectSection';
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <div>
                <AboutSection></AboutSection>
            </div>
            <div className='pt-5 pb-5'>
                <About></About>
            </div>
            <div>
                
                <Skills></Skills>
            </div>
            <div>
                
                <Education></Education>
            </div>
            <div>
                <ProjectSection></ProjectSection>
            </div>
            <div>
                <ContactSection></ContactSection>
            </div>
        </div>
    );
};

export default Home;
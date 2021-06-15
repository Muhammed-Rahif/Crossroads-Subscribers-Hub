import React from 'react';
import AboutContent from '../components/AboutContent/AboutContent';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import SideDrawer from '../components/SideDrawer/SideDrawer';

function About(props) {
    return (
        <React.Fragment>
            <NavBar/>
            <SideDrawer/>
            <AboutContent />
            <Footer />
        </React.Fragment>
    );
}

export default About;
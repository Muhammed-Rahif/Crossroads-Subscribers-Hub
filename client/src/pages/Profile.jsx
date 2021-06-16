import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from "../components/NavBar/NavBar";
import SideDrawer from '../components/SideDrawer/SideDrawer';
import ProfileContent from '../components/ProfileContent/ProfileContent';

function Profile(props) {
    return (
        <React.Fragment>
            <NavBar/>
            <SideDrawer />
            <ProfileContent />
            <Footer />
        </React.Fragment>
    );
}

export default Profile;
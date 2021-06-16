import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import SignupContent from "../components/SignupContent/SignupContent";

function Signup(props) {
  return (
    <React.Fragment>
      <NavBar />
      <SideDrawer />
      <SignupContent />
      <Footer />
    </React.Fragment>
  );
}

export default Signup;

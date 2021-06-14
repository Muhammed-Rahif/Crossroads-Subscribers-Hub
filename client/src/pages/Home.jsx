import React from "react";
import Footer from "../components/Footer/Footer";
import HomeContent from "../components/HomeContent/HomeContent";
import NavBar from "../components/NavBar/NavBar";
import SideDrawer from "../components/SideDrawer/SideDrawer";

function Home(props) {
  return (
    <React.Fragment>
      <NavBar />
      <SideDrawer />
      <HomeContent />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

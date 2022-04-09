/*import React from 'react';
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/InfoSection";
import Services from "../../components/Services";

const Home = () => {
    return (
        <div>

            <HeroSection></HeroSection>
            <InfoSection></InfoSection>
            <Services></Services>

        </div>
    );
};

export default Home;
*/
import React from "react";
import Contact from "../../components/Contact";
import VideoChat from "../../components/Doctors video chat";


import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <VideoChat></VideoChat>
      
      <Services></Services>
      <Contact></Contact>
      
     

    </div>
  );
};

export default Home;

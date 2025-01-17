// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ResearchSection from "./components/ResearchSection";
import GallerySection from "./components/GallerySection";
import SpeakingSection from "./components/SpeakingSection";
import CollaborationsSection from "./components/CollaborationsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AffiliationSection from "./components/AffiliationSection";

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="affiliation">
        <AffiliationSection />
      </section>
      <section id="publications">
        <ResearchSection />
      </section>
      {/* <section id="gallery">
        <GallerySection />
      </section> */}
      {/* <section id="collaborations">
        <CollaborationsSection />
      </section> */}
      {/* <section id="speakingSection">
        <SpeakingSection />
      </section> */}
      <hr />
      <Footer />
    </div>
  );
}

export default App;

import React from "react"; 
import Header from './components/header'
import HeroSection from './components/hero';
import ServicesSection from "./components/solutions";
import PropertiesSection from './components/properties';
import StepsSection from './components/steps'
import DownloadSection from './components/download'
import ContactSection from './components/contact'
import Footer from './components/footer'
import ProjectsSection from './components/projects'
import TestimonialSection from './components/testimonial'
 
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <ServicesSection />
      <PropertiesSection />
      <ProjectsSection />
      <StepsSection />
      <TestimonialSection/>
      <DownloadSection />
      <ContactSection />
      
      
      <Footer/>
    </div>
  );
}

export default App;

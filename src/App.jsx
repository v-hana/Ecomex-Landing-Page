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
      <Header />
      <div className="h-2"><hr/></div>
      <HeroSection />
      <ServicesSection />
      <PropertiesSection />
      <ProjectsSection />
      <StepsSection />
      <TestimonialSection/>
      <DownloadSection />
      <div className="h-2 m-12 md:m-8 sm:m-6 "><hr/></div>
      <ContactSection />
      
      
      <Footer/>
    </div>
  );
}

export default App;

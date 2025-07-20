import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import About from "./about/About";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "../../partials/Footer";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <>
      <div className="  min-h-screen flex flex-col bg-gradient-to-r from-black to-red-900  ">
        <Header />
       <Banner/>
       <About/>
       <Education/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>


      </div>
    </>
  );
};

export default Home;

"use client"
import { useState, useEffect } from "react";
import {
  Hero,
  AboutUs,
  Services,
  Banner,
  Experience,
  Projects,
  Clients,
  Blogs,
  Contact,
} from "../views";

const HomeContainer = () => {


  return (
    <main>

        <>
          <Hero />
          <AboutUs />
          <Services />
          <Banner />
          <Experience />
          <Projects />
          {/* <Clients /> */}
          {/* <Blogs /> */}
          <Contact />
        </>
      
    </main>
  );
};

export default HomeContainer;

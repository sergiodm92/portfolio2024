'use client'
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../common/navbar/Navbar"),{ssr:false});
const HeroOne = dynamic(() => import("../home/views/1-Hero"),{ssr:false});
const AboutUs = dynamic(() => import("../home/views/2-About-us"),{ssr:false});
const Services = dynamic(() => import("../home/views/3-Services"),{ssr:false});
const CTABanner = dynamic(() => import("../home/views/4-Banner"),{ssr:false});
const Experience = dynamic(() => import("../home/views/5-experience"),{ssr:false});
const Projects = dynamic(() => import("../home/views/6-projects"),{ssr:false});
const Clients = dynamic(() => import("../home/views/7-clients"),{ssr:false});
const Blogs = dynamic(() => import("../home/views/8-blog"),{ssr:false});
const GetInTouch = dynamic(() => import("../home/views/9-contact"),{ssr:false});
const Footer = dynamic(() => import("../common/footer/Footer"),{ssr:false});
const Switcher = dynamic(() => import("../common/swich/Switcher"),{ssr:false});

export default function IndexRtl() {
  useEffect(() => {
    if (typeof window !== "undefined") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.classList.add("light");
      
    }
  }, []);
  return (
    <>
      <Navbar />
      <HeroOne />
      <AboutUs />
      <Services />
      <CTABanner />
      <Experience />
      <Projects />
      <Clients />
      <Blogs />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}

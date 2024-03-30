import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  let [stickyNavbar, setstickyNavbar] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
  });

  function windowScroll() {
    setstickyNavbar(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  return (
    <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link1 href="/" className="navbar-brand md:me-8">
          <p className="inline-block">sergio_dm_code</p>
        </Link1>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {!isOpenMobile && (
            <button
              data-collapse="menu-collapse"
              type="button"
              className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
              aria-controls="menu-collapse"
              aria-expanded="false"
              onClick={() => setIsOpenMobile(true)}
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu text-[24px]"></i>
            </button>
          )}
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className={
            isOpenMobile
              ? "navbarMenuMobile"
              : "navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          }
          id="menu-collapse"
        >
          <div
            className={isOpenMobile && "navbarMobileClose"}
            onClick={() => setIsOpenMobile(false)}
          />
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("home")}
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("about_me")}
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="service"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("services")}
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="experience"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("experience")}
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("projects")}
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpenMobile(false)}
              >
                {t("contact")}
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

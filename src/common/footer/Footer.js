"use client"
import React from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              <Link href="#" className="text-[22px] focus:outline-none">
                <span>sergio_dm_code</span>
              </Link>
            </div>
            <div className="lg:col-span-5 text-center mt-6 md:mt-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Sergio David Design & Develop
              </p>
            </div>
            <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                {" "}
                <Link
                  href="https://wa.me/+543875185752"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilWhatsapp width={16} />
                </Link>
              </li>
              <li className="inline">
                {" "}
                <Link
                  href="https://t.me/andres2113"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilTelegram width={16} />
                </Link>
              </li>
              {/* <li className="inline"> <Link href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilBehance width={16}/></Link></li> */}
              <li className="inline">
                {" "}
                <Link
                  href="https://linkedin.com/in/sergio-david-full-stack"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilLinkedin width={16} />
                  <i className="uil uil-linkedin" title="Linkedin"></i>
                </Link>
              </li>
              {/* <li className="inline"> <Link href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilFacebookF width={16} /><i className="uil uil-facebook-f align-middle" title="facebook"></i></Link></li> */}
              {/* <li className="inline"> <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilInstagram width={16}/></Link></li> */}
              {/* <li className="inline"> <Link href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilTwitter width={16}/></Link></li> */}
              <li className="inline">
                {" "}
                <Link
                  href="mailto:crgiodm@gmail.com"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilEnvelope width={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
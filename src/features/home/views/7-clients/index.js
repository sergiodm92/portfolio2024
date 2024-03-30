import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import { review } from "../../../../Data/data";

export const Clients = () => {
  const settings = {
    lazyload: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="testi"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Clients Review
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Obviously I am a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>
        <div className="grid relative grid-cols-1 mt-8">
          <div className="slick-slider">
            <Slider {...settings}>
              {review.map((item, index) => (
                <div className="slick-slide" key={index}>
                  <div className="customer-testi">
                    <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                      <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                      <p className="text-slate-400 text-[15px]">{item.desc}</p>
                      <ul className="list-none mb-0 text-amber-400 mt-3">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center mt-5">
                      <Image
                        src={item.image}
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ with: "100%", height: "auto" }}
                        className="h-14 w-14 rounded-full shadow-md mx-auto mb-1"
                        alt=""
                      />
                      <Link
                        href=""
                        className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-400 text-sm block">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

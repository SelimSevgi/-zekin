// reactflags aktif kullanabilmek için
import React, { useState } from "react";
// reactslick için
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// reactflags için
import ReactFlagsSelect from "react-flags-select";
// react_icon
import { BsFacebook } from "react-icons/bs";

export default function Introduction() {
  // reactslick
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="relative h-[600px] before:bg-gradient-to-r from-red-500 opacity-85 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {/* react slick eklentisi */}
      {/* https://react-slick.neostack.com/ */}
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[600px] object-fill"
            src="https://i.hizliresim.com/azbczij.jpg"
            alt="slick_foto"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[600px] object-fill"
            src="https://www.ozekin.com.tr/upload/bbaa49a3-37b5-4dcd-8d9e-7bb04c4e8570.Jpg"
            alt="slick_foto"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[600px] object-fill"
            src="https://www.ozekin.com.tr/upload/b548e2aa-e526-4d4d-b96b-47f8dcbaff20.Jpg"
            alt="slick_foto"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[600px] object-fill"
            src="https://www.ozekin.com.tr/upload/7fcf3c34-26b0-4ffa-92ae-f19494ef2057.Jpg"
            alt="slick_foto"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[600px] object-fill"
            src="https://www.ozekin.com.tr/upload/91f0603c-0f46-4481-bc01-a074f70eec77.Jpg"
            alt="slick_foto"
          ></img>
        </div>
      </Slider>
      <div className="absolute container flex  items-center justify-center  top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="flex items-center flex-col">
          <img
            className="w-40 h-full rounded-full opacity-70 "
            src="https://www.ozekin.com.tr/royal/ozekin.png"
            alt="logo_foto"
          />

          <h3 className="mt-8 text-4xl  font-semibold text-white opacity-95">
            Cama Dair HERŞEY
          </h3>
        </div>
      </div>
    </div>

    // <div className="w-[400px] rounded-lg bg-[#fafafa] p-6  ">
    // <h4 className="text-red-600 justify-center mb-4 text-center font-semibold">
    //   Bayi Girişi
    // </h4>
    // <div className="grid gap-y-3">
    //   {/* react flags select eklentisi  */}
    //   {/* https://www.npmjs.com/package/react-flags-select */}

    //     <label className="flex-1 relative group block cursor-pointer">
    //       <input
    //         required
    //         className="text-xs h-11 w-full px-4  border-2 border-gray-200 rounded transition-colors group-hover:border-red-500 focus:border-red-500 outline-none peer "
    //       ></input>
    //       <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-red-500 ">
    //         E-Mail Adres
    //       </span>
    //     </label>
    //     <label className="flex-1 relative group block cursor-pointer">
    //       <input
    //         required
    //         className="text-xs h-11 w-full px-4  border-2 border-gray-200 rounded transition-colors group-hover:border-red-500 focus:border-red-500  outline-none peer "
    //       ></input>
    //       <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-red-500 ">
    //         Şifre
    //       </span>
    //     </label>{" "}
    //     <button className="bg-red-700 text-white transition-colors hover:bg-brand-color hover:text-white  h-12 w-full flex justify-center items-center rounded-md text-sm font-semibold ">
    //       Giriş Yap
    //     </button>
    //   </div>

    //   <hr className="h-[1px] bg-gray-300 my-2" />
    // </div>
  );
}

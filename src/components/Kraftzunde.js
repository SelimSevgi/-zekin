import { useState, useEffect } from "react";

// reactslick için
// https://react-slick.neostack.com
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Title için
import Title from "./ui/Title";

// banners datasi için
import Banners from "../api/kraftzunde.json";

// reactIcon
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BsChevronDoubleDown } from "react-icons/bs";

// react-slick_customArrow
function NextBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <GrFormNext size={20} />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <GrFormPrevious size={20} />
    </button>
  );
}

export default function Kraftzunde() {
  // useState
  const [banners, setBanners] = useState([]);

  // useEffect
  useEffect(() => {
    setBanners(Banners);
  }, []);

  // reactslick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="container mx-auto py-4  ">
      <div className="flex flex-row items-center justify-center text-center gap-x-9">
        <img
          className="flex justify-center items-center text-center h-[50px] object-fill"
          src=""
        />
        <div className="flex justify-center items-center text-center flex-col">
          <img src="https://i.hizliresim.com/520m09s.jpg" className="w-[200px]"/>
          <Title>KRAFTZUNDE ÜRÜN GRUPLARI</Title>
          <BsChevronDoubleDown size={20} className="mb-9 bg-red-600w-36 " />
        </div>
      </div>

      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((a, index) => (
            <div key={a.id} className="hover:text-red-600 ">
              <picture className="block px-2 relative ">
                <img
                  src={a.image}
                  alt="campaigns_foto"
                  className=" rounded-lg  h-[502px]"
                />
                <h2 className="absolute bottom-2 left-4 text-xl text-red-600  shadow shadow-white opacity-90">
                  {a.desc}
                </h2>
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

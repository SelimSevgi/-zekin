import { AiFillHome, AiOutlineWechat } from "react-icons/ai";
import { TbBrandAirtable } from "react-icons/tb";
import { BsSlack, BsFillCreditCardFill } from "react-icons/bs";
import { MdOutlineCorporateFare, MdPermMedia } from "react-icons/md";
import { CgChevronDoubleDown } from "react-icons/cg";


// import { BsGlobe } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const menu = [
    {
      id: 1,
      title: "Anasayfa",
      icon: <AiFillHome size={20} />,
      link: "",
      subTitle: []
    },
    {
      id: 2,
      title: "Kurumsal",
      icon: <MdOutlineCorporateFare size={20} />,
      link: "",
      subTitle: [
        {
          id: 21,
          title: "Hakkımızda",
          link: "/hakkımızda",
        },
        {
          id: 22,
          title: "Kalite Politikasi",
          link: "/kalitePolitikasi",
        },
        {
          id: 23,
          title: "Katalog",
          link: "/katalog",
        },
        {
          id: 24,
          title: "Referanslar",
          link: "/referanslar",
        },
      ],
      iconDown: <CgChevronDoubleDown size={17} />,
    },

    {
      id: 3,
      title: "Markalarımız - Referanslar",
      icon: <TbBrandAirtable size={20} />,
      link: "",
      subTitle: [
        {
          id: 31,
          title: "Rehau",
          link: "/rehau",
        },
        {
          id: 32,
          title: "Royal Glass",
          link: "/royalGlass",
        },
        {
          id: 33,
          title: "Tempo Cam",
          link: "/tempoCam",
        },
        {
          id: 34,
          title: "Kraftzunde",
          link: "/kraftzunde",
        },
      ],
      iconDown: <CgChevronDoubleDown size={17} />,
    },
    {
      id: 4,
      title: "Camlama Sistemleri",
      icon: <BsSlack size={20} />,
      link: "",
      subTitle: [
        {
          id: 61,
          title: "Sürme Sistemler",
          link: "/sürmeSistemler",
        },
        {
          id: 62,
          title: "Pergole,Biyoklimatik ve Gölgelendirme Sistemleri",
          link: "/pergole_biyoklimatik_gölgelendirmeSistemler",
        },
        {
          id: 63,
          title: "Küpeşte ve Korkuluk Sistemleri",
          link: "/küpeşte_korkulukSistemler",
        },
        {
          id: 64,
          title: "Katlanır Sistemler",
          link: "/katlanirSistemler",
        },
        {
          id: 65,
          title: "Giyotin Sistemler",
          link: "/giyotinSistemler",
        },
      ],
      iconDown: <CgChevronDoubleDown size={17} />,
    },
    {
      id: 5,
      title: "Medya - Galeri",
      icon: <MdPermMedia size={20} />,
      link: "",
      subTitle: [
        {
          id: 41,
          title: "Fotoğraf Galerisi",
          link: "/fotografGalerisi",
        },
        {
          id: 42,
          title: "Video Galerisi",
          link: "/videoGalerisi",
        },
        {
          id: 43,
          title: "Haberler",
          link: "/haberler",
        },
        {
          id: 44,
          title: "Blog",
          link: "/blog",
        },
      ],
      iconDown: <CgChevronDoubleDown size={17} />,
    },

    {
      id: 7,
      title: "Satış Noktaları",
      icon: <BsFillCreditCardFill size={20} />,
      link: "",
    },
    {
      id: 8,
      title: "İletişim",
      icon: <FaTelegramPlane size={20} />,
      link: "",
    },
  ];

  const [showDrop, setShowDrop] = useState("");
  return (
    <div className="bg-red-600  fixed z-30 w-full ">
      <div className="p-2 mx-auto h-11 flex items-center justify-between text-sm mr-3">
        <a href="#" rel="ozekin">
          <img
            src="	https://www.ozekin.com.tr/royal/%C3%B6zekinlogo.png"
            alt="özekin"
            className="w-full h-10"
          />
        </a>
        {menu.map((item, index) => (
          <div
            className=" relative flex  gap-x-5 font-semibold py-4"
            onMouseOver={() => setShowDrop(item.id)}
            onMouseLeave={() => setShowDrop("")}
          >
            <a
              href="#"
              rel="ozekin"
              className="flex items-center gap-x-4 text-white transition-all text-opacity-80 hover:text-opacity-100 hover:underline "
            >
              {item.icon}
              <p>{item.title}</p>
          {item.iconDown }
            </a>
            {item.id === showDrop && item.subTitle?.length > 0 && (
              <div className="absolute top-12  flex items-center justify-center text-center flex-col gap-y-2  bg-white rounded-lg opacity-100  border border-red-600 p-4 w-56">
                {item.subTitle?.map((subTitle, index) => (
                  <a href="#" className="hover:text-red-600 hover:underline transition duration-300">{subTitle.title}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

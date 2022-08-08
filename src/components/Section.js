import { useState } from "react";
import { FaRegHandshake } from "react-icons/fa";

export default function Section() {
  const [selectCard, setSelectCard] = useState("");
  const cardItem = [
    {
      id: 1,
      img: "hover:bg-selectUrun hover:bg-opacity-20 bg-cover h-[110px]",
      title: "ÜRÜNLER",
      content: "Cam - CamBalkonSerisi - Pvc Siparişi",
      descrip: "",
      flipImg: "",
      flipTitle: "ÜRÜNLER",
      flipContent: "Siparişler İçin Tıklayabilirsiniz.",
      flipDescrip: "",
    },
    {
      id: 2,
      img: "hover:bg-selectBayi hover:bg-opacity-20  bg-cover h-[110px]",
      title: "BAYİLİK",
      content: "Bayilik Başvurusu",
      descrip: "",
      flipImg: "",
      flipTitle: "BAYİLİK",
      flipContent: "Bayilik Başvurusunda Bulunabilirsiniz.",
      flipDescrip: "",
    },
    {
      id: 3,
      img: "hover:bg-selectProje hover:bg-opacity-20  bg-cover h-[110px]",
      title: "PROJE",
      content: "Proje Teklifi",
      descrip: "",
      flipImg: "",
      flipTitle: "PROJE",
      flipContent: "Projeniz İçin Teklif Alınız.",
      flipDescrip: "",
    },
  ];
  console.log(selectCard);
  return (
    <div className=" container bg-white py-10 mx-auto flex flex-row gap-x-5   justify-center items-center mt-3 ">
      {cardItem.map((item, idx) => (
        <a href="#" rel="ozekin">
          <div
            className={
              "flex text-center  items-center justify-center flex-col gap-y-2 w-70  p-6  duration-1000 rounded-lg transition-colors  bg-black bg-opacity-75 text-white hover:text-rose-900 hover:font-extrabold  hover:bg-opacity-20 hover:animate-wiggle w-[220px] " +
              item.img
            }
            onMouseOver={() => setSelectCard(item.id)}
            onMouseLeave={() => setSelectCard("")}
          >
            <p className="shadow-lg opacity-100">{selectCard === item.id ? item.flipTitle : item.title}</p>
            <p className="text-sm  hover:underline shadow-lg  opacity-100">
              {selectCard === item.id ? item.flipContent : item.content}
            </p>
            <p>{selectCard === item.id ? item.flipDescrip : item.descrip}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

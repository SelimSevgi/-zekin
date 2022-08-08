import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrYoutube, GrMail } from "react-icons/gr";
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="bg-white container mx-auto">
      <div
        className=" bg-gradient-to-b rounded-lg 
                from-transparent to-red-500 "
      >
        <img className="bg-footer"/>
        <div className="text-center pt-10 px-7 flex flex-row text-xs   justify-between  mt-10  border-b-2 py-6 font-normal text-opacity-80 ">
          <section className="flex flex-col gap-y-4 w-[400px]">
            <h3 className="text-red-600 text-2xl">Özekin Grup</h3>
            <p className="leading-8 text-[13px]">
              İnşaat sektöründe 1991'den bu yana sahip olduğu engin tecrübesi,
              tam donanımlı, son teknolojiye uygun kurulmuş makine parkuru,
              alanında profesyonel kadrosu ile Malatya 2. Organize Sanayi'de
              17.000 metrekare alan üzerinde; hem üretici hem uygulayıcı olduğu;{" "}
              <br />
              <span className="font-black ">PVC</span>,{" "}
              <span className=" font-black ">
                Alüminyum Sistemler ve Dış Cephe Elemanları,{" "}
              </span>{" "}
              <span className=" font-black ">
                Cam İşleme Tesisi ve Teknik Camlama Sistemleri
              </span>{" "}
              olarak 3 ana alanda hizmet vermektedir. 
            </p>
            
          </section>
       
          <section className="flex flex-col gap-y-4 w-[400px]">
            <h3 className="text-red-600 text-2xl">Özekin Grubu Takip Edin</h3>
            <section className="flex flex-row gap-x-6 items-center justify-center ">
              <a
                href="#"
                className="transition-colors hover:text-pink-700  hover:underline decoration-solid "
              >
                <AiFillInstagram
                  size={25}
                  className="transition duration-500 hover:scale-110"
                />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-700  hover:underline decoration-solid "
              >
                <AiFillFacebook
                  size={25}
                  className="transition duration-500 hover:scale-110"
                />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-700  hover:underline decoration-solid "
              >
                <BsTwitter
                  size={25}
                  className="transition duration-500 hover:scale-110"
                />
              </a>{" "}
              <a
                href="#"
                className="transition-colors hover:text-red-600  hover:underline decoration-solid "
              >
                <GrYoutube
                  size={25}
                  className="transition duration-500 hover:scale-110"
                />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-red-600  hover:underline decoration-solid "
              >
                <FaPinterestP
                  size={25}
                  className="transition duration-500 hover:scale-110"
                />
              </a>
            {" "}
            </section>
         
            <section className="flex flex-row gap-x-3 items-center text-center">
              <HiOutlineInformationCircle size={20} className="text-red-600 " />
              <p>
                2.Organize Sanayi Bölgesi, Havaalanı Yolu 4.km, 2. Sokak No:33{" "}
                <br />
                Yeşilyurt/Malatya/Türkiye
              </p>
            </section>
            <section className="flex flex-row gap-x-3 items-center text-center ">
              <BsTelephoneFill size={20} className="text-red-600 " />
              <p>
                +90 422 244 01 54 <br />
                +90 549 712 4441
              </p>
            </section>
            <section className="flex flex-row gap-x-3 items-center text-center ">
              <GrMail size={20} className="text-red-600 " />
              <p>info@ozekin.com.tr</p>
            </section>
            <section className="flex flex-col gap-y-4 ">
            <h3 className="text-red-600 text-2xl">
              İştirak Gruplarımız
            </h3>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-red-600 hover:font-bold "
            >
              {" "}
              <p>Tempo Cam (Cam Üretimi ve İşleme Sistemleri)</p>
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-red-600 hover:font-bold "
            >
              <p>Royal Glass (Teknik Camlama Sistemleri)</p>
            </a>{" "}
            <a
              href="#"
              className="transition-colors duration-300 hover:text-red-600 hover:font-bold "
            >
              <p>
                KräftZunde (PVC ve Alüminyum Sistemleri, Dış Cephe Uygulamaları)
              </p>
            </a>
          </section>
          </section>
        </div>
        <p>© 2022 ÖzekinGrup - Selim SEVGİ</p>
      </div>
    </div>
  );
}

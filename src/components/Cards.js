// useState useEffect
import { useState, useEffect } from "react";

// data
import cardsData from "../api/cards.json";

export default function Cards() {
  
  // useState için
  const [ cards, setCards ] = useState([]);

  // useEffect //
  useEffect(() => {
    // data isteği
    setCards(cardsData);
  }, []);

  return(
  <div className="grid grid-cols-3 gap-x-4 ">
    {cards.length &&
      cards.map((cards) => (
        <div className="bg-white p-14 flex items-center text-center flex-col  rounded-lg shadow-md ">
          <img src={cards.image} href="#" />
          <h3 className="text-primary-brand-color font-semibold text-base mt-6 mb-2">
            {cards.title}
          </h3>
          <p className="text-gray-700  text-sm ">
            {cards.description}
          </p>
        </div>
      ))}
  </div>);
}

import React, { useState, useEffect } from "react";
import perguntas from "../../assets/FaqJson/faq.json";
import icon from "../../assets/img/faq/icon01.svg";

const FaqPage = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(perguntas.questions);
  }, []);

  return (
    <div className="flex flex-col bg-gray-100 py-10 px-4 md:px-10 lg:px-20 xl:px-32">
      <div className="bg-white rounded-2xl h-60 flex items-center justify-center mb-10 md:mt-5">
        <img src={icon} alt="Image icon" className="h-12.5  mx-auto" />
      </div>

      {faq.map((element, index) => (
        <div
          key={index}
          className=" bg-white rounded-2xl shadow-md mb-8 md:mb10 lg:mb-12"
        >
          <p className=" font-dela text-black text-xl	 pt-2 mx-10 mt-10">
            {element.question}
          </p>
          <p className=" border-t-[3px] text-sm	 font-Montserrat text-gray-600 pb-8 pt-2 mx-10 mt-10">
            {element.answer}
          </p>
        </div>
      ))}
    </div>
  );
};
export default FaqPage;

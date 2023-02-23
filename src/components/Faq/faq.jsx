import React, { useState, useEffect } from "react";
import perguntas from "../../assets/FaqJson/faq.json";
import icon from "../../assets/img/faq/icon01.svg";

export default function Faq() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(perguntas.questions);
  }, []);

  return (
    <div>
      <div>
        <img src={icon} alt="Image icon" />
      </div>

      {faq.map((element, index) => (
        <div key={index}>
          <p>{element.question}</p>
          <p>{element.answer}</p>
        </div>
      ))}
    </div>
  );
}

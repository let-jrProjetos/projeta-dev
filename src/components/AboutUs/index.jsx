import React from "react";

import analice from "../../assets/img/analiceMarques.jpg";
import bruno from "../../assets/img/brunoGoulart.jpg";
import larissa from "../../assets/img/larissaTerada.jpg";
import michelle from "../../assets/img/michelleAntunes.jpg";
import nathalia from "../../assets/img/nathaliaBuchholz.jpg";

export default function AboutUs() {
  return (
    <div className="bg-grey-123">
      <div>
        <img alt="Imagem - Analice Marques" src={analice}></img>

        <h3>Analice Marques</h3>
        <p>
          Analice Marques, 28 anos, Desenvolvedora Front-end. Formada em
          Engenharia Civil decidi fazer transição de carreira para a área da
          tecnologia em busca de melhores oportunidades no mercado de trabalho.
          “Posso dizer que sai da construção do mundo real para a construção do
          mundo virtual.”
        </p>
      </div>
      <div>
        <img src={bruno} alt="Imagem - Bruno Goulart" />
        <h3>Bruno Goulart</h3>
        <p>
          Bruno Goulart, 30 anos, em transição de carreira para Desenvolvedor
          Front-end, buscando novos desafios e oportunidades para crescimento
          profissional. Gosto de desafios e encaro essa caminhada como uma
          aventura sem um fim.
        </p>
      </div>
      <div>
        <img src={larissa} alt="Imagem - Larissa Terada" />
        <h3>Larissa Terada</h3>
        <p>
          Larissa Terada, 25 anos, formada Bailarina profissional e em transiçāo
          de carreira para o mundo da Tecnologia.
        </p>
      </div>
      <div>
        <img src={michelle} alt="Imagem - Michelle Antunes" />
        <h3>Michelle Antunes</h3>
        <p>
          Michelle Antunes, 29 anos, Administradora de Empresas por formação,
          pós-graduada em Gestão Financeira/Controladoria por amar números e
          Desenvolvedora Frond-end , atualmente em transição de carreira para a
          área da tecnologia. Conciliando todos os conhecimentos já adquiridos
          anteriormente com um novo trabalho, buscando sempre novas e melhores
          oportunidades.{" "}
        </p>
      </div>
      <div>
        <img src={nathalia} alt="Imagem - Nathália Buchholz" />
        <h3>Nathália Buchholz</h3>
        <p>
          Nathalia Buchholz, 27 anos, Entre as aventuras de caçar dragões em
          mundos épicos e desvendar bugs de código, em um aprendizado constante.
        </p>
      </div>
    </div>
  );
}

import React from "react";

import analice from "../../assets/img/analiceMarques.jpg";
import bruno from "../../assets/img/brunoGoulart.jpg";
import larissa from "../../assets/img/larissaTerada.jpg";
import michelle from "../../assets/img/michelleAntunes.jpg";
import nathalia from "../../assets/img/nathaliaBuchholz.jpg";

export default function AboutUs() {
  return (
    <div className="bg-grey-123  border-4 text-black	">
      <div className="flex flex-col	items-center gap-6  m-6 p-2 bg-white rounded-lg">
        <img
          className=" w-24 rounded-full"
          alt="Imagem - Analice Marques"
          src={analice}
        ></img>
        <div className="flex justify-around items-center	gap-4	">
          <h3 className="text-2xl  font-Dela 	">Analice Marques </h3>
          <div className="badge badge-accent  badge-lg"> GitHub</div>
        </div>

        <p className="font-Montserrat">
          Analice Marques, 28 anos, Desenvolvedora Front-end. Formada em
          Engenharia Civil decidi fazer transição de carreira para a área da
          tecnologia em busca de melhores oportunidades no mercado de trabalho.
          “Posso dizer que sai da construção do mundo real para a construção do
          mundo virtual.”
        </p>
      </div>
      <div className="flex flex-col	items-center gap-6 m-6 p-2 bg-white rounded-lg">
        <img
          className=" w-24 rounded-full"
          src={bruno}
          alt="Imagem - Bruno Goulart"
        />
        <div className="flex justify-around	items-center gap-4		">
          <h3 className="text-2xl font-Dela 	">Bruno Goulart</h3>
          <div className="badge badge-accent  badge-lg">GitHub</div>
        </div>

        <p className="font-Montserrat">
          Bruno Goulart, 30 anos, em transição de carreira para Desenvolvedor
          Front-end, buscando novos desafios e oportunidades para crescimento
          profissional. Gosto de desafios e encaro essa caminhada como uma
          aventura sem um fim.
        </p>
      </div>
      <div className="flex flex-col	items-center gap-6  m-6 p-2 bg-white rounded-lg">
        <img
          className=" w-24 rounded-full"
          src={larissa}
          alt="Imagem - Larissa Terada"
        />
        <div className="flex justify-around	items-center	gap-4	">
          <h3 className="text-2xl font-Dela	">Larissa Terada</h3>
          <div className="badge badge-accent  badge-lg">GitHub</div>
        </div>

        <p className="font-Montserrat">
          Larissa Terada, 25 anos, formada Bailarina profissional e em transiçāo
          de carreira para o mundo da Tecnologia.
        </p>
      </div>
      <div className="flex flex-col	items-center gap-6  m-6 p-2 bg-white rounded-lg">
        <img
          className=" w-24 rounded-full"
          src={michelle}
          alt="Imagem - Michelle Antunes"
        />
        <div className="flex justify-around	items-center gap-4		">
          <h3 className="text-2xl font-Dela	">Michelle Antunes</h3>
          <div className="badge badge-accent  badge-lg">GitHub</div>
        </div>

        <p className="font-Montserrat">
          npm Michelle Antunes, 29 anos, Administradora de Empresas por
          formação, pós-graduada em Gestão Financeira/Controladoria por amar
          números e Desenvolvedora Frond-end , atualmente em transição de
          carreira para a área da tecnologia. Conciliando todos os conhecimentos
          já adquiridos anteriormente com um novo trabalho, buscando sempre
          novas e melhores oportunidades.{" "}
        </p>
      </div>
      <div className="flex flex-col	items-center gap-6  m-6 p-2 bg-white rounded-lg">
        <img
          className=" w-24 rounded-full"
          src={nathalia}
          alt="Imagem - Nathália Buchholz"
        />
        <div className="flex justify-around	items-center	gap-4	">
          <h3 className="text-2xl font-Dela	">Nathália Buchholz</h3>
          <div className="badge badge-accent  badge-lg">GitHub</div>
        </div>

        <p className="font-Montserrat">
          Nathalia Buchholz, 27 anos, Entre as aventuras de caçar dragões em
          mundos épicos e desvendar bugs de código, em um aprendizado constante.
        </p>
      </div>
    </div>
  );
}

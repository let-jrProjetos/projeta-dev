const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" bg-gray-123  p-5">
        <div className="flex flex-col items-center">
          <p className=" text-blue-green font-Montserratfont-bold ">
            PLATAFORMA COLABORATIVA
          </p>
          <h1 className="flex items-center flex-wrap text-black font-Dela font-normal">Juntos podemos desenvolver projetos melhores!</h1>
          <span className="">Trabalho em equipe pode tranformar o seu portifólio</span>
          <button>Cadastre-se</button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-white w-full p-5">
        <div className="flex flex-col items-center">
          <h2>Crie Projetos</h2>
          <span>Você pode elaborar projetos grandes ou pequenos.</span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-white w-full p-5">
        <div className="flex flex-col items-center">
          <h2>Colabore</h2>
          <span>
            Participe de projetos com tecnologias que você tem conhecimento e
            tenha a oportunidade de alavancar o seu portifólio!
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex flex-col items-center">
          <h2>Aprenda</h2>
          <span>
            Ao desenvolver projetos em equipe você aprimora suas hard skills e
            tem a oportunidade de desenvolver as suas soft skills!
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

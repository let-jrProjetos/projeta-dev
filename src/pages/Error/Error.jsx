import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import imageError from "../../assets/img/errorPage.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center w-4/5 md:w-6/12 h-25 p-4 rounded-2xl bg-white shadow-xl">
        <img src={imageError} alt="Imagem de erro" className="p-2" />
        <div>
          <h2 className="text-2xl font-Dela">
            Ops!! Parece que essa página não está disponível! :({" "}
          </h2>
          <div className="font-Montserrat mt-2">
            <p>
              A página que você está buscando não exite ou não está mais
              disponível.
            </p>
            <Link to="/">
              <button className="flex justify-start items-center mt-4 hover:font-bold cursor-pointer">
                Ir para página inicial
                <FaArrowRight className="fill-[#111111]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;

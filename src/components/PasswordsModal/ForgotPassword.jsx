import { useForm } from "../../hooks/useForm";
import { FaEnvelope } from "react-icons/fa";

export const ForgotPassword = ({ onClose }) => {
  const { form, onChange } = useForm({
    email: "",
  });

  const submitFormForgotPassword = (event) => {
    event.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="modal-box flex flex-col justify-center items-center bg-white rounded-lg p-6">
        <label
          htmlFor="modalLogin"
          className="btn bg-transparent border-none hover:bg-transparent font-Montserrat font-semibold text-base text-gray-header absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </label>
        <div className="font-bold font-Dela text-center my-6">
          RECUPERAR SENHA
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>
            Esqueceu sua senha? Digite seu e-mail cadastrado que enviaremos uma
            o código de ativação para redefinir sua senha.
          </p>
        </div>

        <form
          onSubmit={submitFormForgotPassword}
          className="w-11/12 flex flex-col space-y-6"
        >
          <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
            <FaEnvelope className="fill-[#757575]" />
            <label htmlFor="email"></label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="E-mail"
              required
              className="w-full border-none focus:outline-none bg-transparent"
            />
          </div>

          <div className="modal-action grid grid-cols-4">
            <button
              type="submit"
              className="btn col-start-2 col-span-2 bg-blue-green border-2 border-transparent mt-2 mb-2 rounded-2xl font-Dela font-thin text-xs capitalize tracking-[.15em] hover:bg-white hover:border-2 hover:border-[#2B788B] hover:text-[#2B788B]"
            >
              Recuperar
            </button>
          </div>
        </form>

        <div className="font-Dela text-xs mb-6">
          Já possui cadastro?{" "}
          <span
            className="btn-link font-Dela text-xs text-blue-green no-underline hover:cursor-pointer"
            onClick={onClose}
          >
            Faça seu login aqui!
          </span>
        </div>
      </div>
    </div>
  );
};

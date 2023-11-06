import { useForm } from "../../hooks/useForm";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const ResetPassword = ({ onClose }) => {
  const { form, onChange } = useForm({
    password: "",
    code: "",
  });

  const submitFormResetPassword = (event) => {
    event.preventDefault();

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="modal-box flex flex-col justify-center items-center bg-white rounded-lg p-6 w-full ">
        <label
          htmlFor="modalLogin"
          className="btn bg-transparent border-none hover:bg-transparent font-Montserrat font-semibold text-base text-gray-header absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </label>
        <div className="font-bold font-Dela text-center my-6">
          REDEFINIÇÃO DE SENHA
        </div>
        <div className="text-center text-base font-Montserrat mt-5 mb-10 ">
          <p>
            Por favor, insira no campo abaixo o código de ativação que você
            recebeu por e-mail e redefina uma nova senha.
          </p>
        </div>

        <form
          onSubmit={submitFormResetPassword}
          className="w-11/12 flex flex-col space-y-6"
        >
          <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
            <FaEnvelope className="fill-[#757575]" />
            <label htmlFor="code"></label>
            <input
              id="code"
              name="code"
              value={form.code}
              onChange={onChange}
              type="code"
              placeholder="Código"
              required
              className="w-full border-none focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
            <FaLock className="fill-[#757575]" />
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              value={form.password}
              onChange={onChange}
              type="password"
              placeholder="Nova Senha"
              required
              className="w-full border-none focus:outline-none bg-transparent"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
            <FaLock className="fill-[#757575]" />
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              value={form.password}
              onChange={onChange}
              type="password"
              placeholder="Repita a nova senha"
              required
              className="w-full border-none focus:outline-none bg-transparent"
            />
          </div>

          <div className="modal-action grid grid-cols-4">
            <button
              type="submit"
              className="btn col-start-2 col-span-2 bg-blue-green border-2 border-transparent mt-5 mb-10 rounded-2xl font-Dela font-thin text-xs capitalize tracking-[.15em] hover:bg-white hover:border-2 hover:border-[#2B788B] hover:text-[#2B788B]"
            >
              Redefinir
            </button>
          </div>
        </form>

        <div className="font-Dela text-xs mb-6">
          Não recebeu o e-mail?{" "}
          <span
            className="btn-link font-Dela text-xs text-blue-green no-underline hover:cursor-pointer"
            onClick={onClose}
          >
            Reenviar aqui!
          </span>
        </div>
      </div>
    </div>
  );
};

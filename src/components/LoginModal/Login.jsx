import { useForm } from "../../hooks/useForm";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";

export const Login = () => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const submitFormLogin = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <label
        htmlFor="modalLogin"
        className="btn-link flex justify-space-between items-center gap-1 text-sm text-black no-underline hover:cursor-pointer"
      >
        <div className="font-Montserrat font-bold">Entrar</div>
        <FaArrowRight />
      </label>

      <input type="checkbox" id="modalLogin" className="modal-toggle" />
      <div className="modal modal-center modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <label
            htmlFor="modalLogin"
            className="btn bg-transparent border-none hover:bg-transparent font-Montserrat font-semibold text-base text-gray-header absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="font-bold font-Dela text-center my-6">
            NOSSO NOME AQUI
          </div>

          <form
            onSubmit={submitFormLogin}
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

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
              <FaLock className="fill-[#757575]" />
              <label htmlFor="password"></label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={onChange}
                type="password"
                placeholder="Senha"
                required
                className="w-full border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <p className="btn-link font-Dela text-xs text-blue-green no-underline hover:cursor-pointer md:order-last">
                Esqueceu sua senha?
              </p>
              <div>
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="default:bg-[#C3DCE3]"
                />
                <label htmlFor="remember" className="font-Montserrat">
                  Manter Conectado
                </label>
              </div>
            </div>

            <div className="modal-action grid grid-cols-4">
              <label
                htmlFor="modalLogin"
                type="submit"
                className="btn col-start-2 col-span-2 bg-blue-green border-2 border-transparent mt-2 mb-2 rounded-2xl font-Dela font-thin text-xs capitalize tracking-[.15em] hover:bg-white hover:border-2 hover:border-[#2B788B] hover:text-[#2B788B]"
              >
                Entrar
              </label>
            </div>
          </form>

          <div className="font-Dela text-xs mb-6">
            Não tem uma conta?{" "}
            <span className="btn-link font-Dela text-xs text-blue-green no-underline hover:cursor-pointer">
              Crie agora!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
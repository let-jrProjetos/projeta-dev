import { useForm } from "../../hooks/useForm";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";

export const SingIn = () => {
  const { form, onChange } = useForm({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const submitFormSingIn = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <label
        htmlFor="modalSingIn"
        className="btn btn-sm capitalize bg-[#2B788B] border-2 border-transparent font-Montserrat text-white text-sm font-bold px-4 rounded-2xl hover:bg-white hover:border-2 hover:border-[#2B788B] hover:text-[#2B788B]"
      >
        Cadastrar
      </label>

      <input type="checkbox" id="modalSingIn" className="modal-toggle" />
      <div className="modal modal-center modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <label
            htmlFor="modalSingIn"
            className="btn bg-transparent border-none hover:bg-transparent font-Montserrat font-semibold text-base text-gray-header absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="font-bold font-Dela text-center my-6">
            NOSSO NOME AQUI
          </div>

          <form
            onSubmit={submitFormSingIn}
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
                placeholder="Seu melhor e-mail"
                required
                className="w-full border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
              <FaUser className="fill-[#757575]" />
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                value={form.emailname}
                onChange={onChange}
                type="text"
                placeholder="Nome completo"
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

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline focus-within:outline-[#2B788B]/80">
              <FaLock className="fill-[#757575]" />
              <label htmlFor="passwordConfirm"></label>
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                value={form.passwordConfirm}
                onChange={onChange}
                type="password"
                placeholder="Confirmar senha"
                required
                className="w-full border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="modal-action grid grid-cols-4">
              <label
                htmlFor="modalSingIn"
                type="submit"
                className="btn col-start-2 col-span-2 bg-blue-green border-2 border-transparent mt-4 mb-6 rounded-2xl font-Dela font-thin text-xs capitalize tracking-[.15em] hover:bg-white hover:border-2 hover:border-[#2B788B] hover:text-[#2B788B]"
              >
                Registrar-se
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

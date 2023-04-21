import { useForm } from "../hooks/useForm";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";

export const SingIn = () => {
  const { form, onChange } = useForm({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });
  //onSubmit={submitFormSingIn}
  return (
    <div>
      <label
        htmlFor="my-modal-6"
        className="btn bg-[#2B788B] px-4 py-2 rounded-2xl text-align"
      >
        SING IN
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-center sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <div className="font-bold font-Dela text-center my-6">
            NOSSO NOME AQUI
          </div>

          <form className="flex flex-col gap-8 w-10/12 ">
            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline">
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

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline">
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

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline">
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

            <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 rounded-2xl focus-within:outline">
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
          </form>

          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn bg-blue-green border-none w-48 md:w-60 mt-2 mb-6 rounded-2xl font-Dela font-thin text-xs capitalize tracking-[.25em]"
            >
              Registrar-se
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useForm } from "../hooks/useForm";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
// FaRegEnvelope
// FaRegUser

export const SingIn = () => {
  const { form, onChange } = useForm({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });
  //onSubmit={submitFormSingIn}
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-2 rounded-lg text-[#757575] m-3">
        Logo Projeta Dev
      </div>

      <form>
        <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 mb-3 text-[#757575] rounded-2xl">
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
            className="border-none focus:outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 mb-3 text-[#757575] rounded-2xl">
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
            className="border-none focus:outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 mb-3 text-[#757575] rounded-2xl">
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
            className="border-none focus:outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-row justify-start items-center gap-1 bg-[#C3DCE3] px-4 py-2 mb-3 text-[#757575] rounded-2xl">
          <FaUser className="fill-[#757575]" />
          <label htmlFor="passwordConfirm"></label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={onChange}
            type="password"
            placeholder="Confirmar senha"
            required
            className="border-none focus:outline-none bg-transparent"
          />
        </div>

        <button className="bg-[#2B788B] text-white px-4 py-2 rounded-2xl w-4/5 text-align">
          Registrar-se
        </button>
      </form>
    </div>
  );
};

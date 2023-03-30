import { useForm } from "../../hooks/useForm";
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

  return (
    <>
      <h1>NOSSO NOME AQUI</h1>

      <form>
        <label htmlFor="email"></label>
        <div>
          <FaEnvelope />
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="Seu melhor e-mail"
            required
          />
        </div>

        <label htmlFor="name"></label>
        <div>
          <FaUser />
          <input
            id="name"
            name="name"
            value={form.emailname}
            onChange={onChange}
            type="text"
            placeholder="Nome completo"
            required
          />
        </div>

        <label htmlFor="password"></label>
        <div>
          <FaLock />
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            placeholder="Senha"
            required
          />
        </div>

        <label htmlFor="passwordConfirm"></label>
        <div>
          <FaLock />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={onChange}
            type="password"
            placeholder="Confirmar senha"
            required
          />
        </div>

        <button className="bg-[#2B788B] text-white ">Registrar-se</button>
      </form>
    </>
  );
};

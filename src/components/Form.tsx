import { FormEvent, useState } from "react"
import { IUser } from "../types/User";
import { validate } from "../utils/validate";

export const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<IUser | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setErrors(null)

    const data: IUser = {
      name,
      email,
      agree
    };

    const validateErrors = validate(data);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors)
      return;
    }

    setName('');
    setEmail('');
    setAgree(false);
    alert('Thanks')
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">Name:</label>
        <input className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="text"
          placeholder="Enter your name:"
          value={name} onChange={e => setName(e.target.value)}
        />
        {/* exibir cada chave de erro abaixo do input corret */}
        {errors?.name && <small className="text-xs text-red-500 mt-1 pl-2">{errors?.name}</small>}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">Email:</label>
        <input className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="email"
          placeholder="Enter your best email:"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        {errors?.email && <small className="text-xs text-red-500 mt-1 pl-2">{errors?.email}</small>}
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-4">Read the terms.</a>
        <div className="flex gap-2 items-center mb-2">
          <input type="checkbox"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">I agree.</label>
          {errors?.agree && <small className="text-xs text-red-500 mt-1 pl-2">{errors?.agree}</small>}

        </div>
      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Sing up</button>
    </form>
  )
}
"use client";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  id: string;
}

const Input: React.FC<Props> = ({ placeholder, register, id }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        {...register(id)}
        className="p-3 outline-sky-500 outline-1 border border-sky-500 rounded-sm w-full"
      />
    </div>
  );
};

export default Input;

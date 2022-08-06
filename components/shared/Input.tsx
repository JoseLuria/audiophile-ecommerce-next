import { FC, HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
  value?: string;
  defaultChecked?: boolean;
}

export const Input: FC<Props> = ({
  id,
  label,
  type = "text",
  register,
  placeholder,
  error,
  value,
  className,
  defaultChecked,
}) => {
  if (type === "radio") {
    return (
      <div
        className={`w-full px-4 py-[1.125rem] border-[1px] gap-4 border-low-gray rounded-lg flex items-center ${className}`}
      >
        <input
          className="w-5 h-5 rounded-full appearance-none border-[1px] border-low-gray flex checked:before:w-[0.625rem] checked:before:h-[0.625rem] checked:before:bg-beige checked:before:rounded-full checked:before:m-auto"
          {...register(id)}
          id={id}
          type={type}
          value={value}
          defaultChecked={defaultChecked}
        />
        <label className="font-bold text-[0.875rem]" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <label
        className={`flex justify-between text-xs mb-2 font-bold ${
          error ? "text-red" : "text-black"
        }`}
        htmlFor={id}
      >
        {label}
        <span className="font-medium">{error && "Wrong format"}</span>
      </label>

      <input
        {...register(id)}
        className={`w-full outline-none py-[1.125rem] text-sm font-bold px-6 rounded-lg border-[1px] ${
          error
            ? "border-red placeholder:text-red"
            : "border-low-gray focus:border-beige"
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

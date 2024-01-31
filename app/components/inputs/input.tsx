"use client";

import { AuthInputProps } from "@/app/types/components/inputs";
import clsx from "clsx";

export const Input: React.FC<AuthInputProps> = ({
  label,
  id,
  type = "text",
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          `peer/input block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-3`,
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
      <label
        className={clsx(
          "peer-focus/input:text-sky-600 block text-sm font-medium leading-6 text-gray-600",
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
        htmlFor="id"
      >
        {label}
      </label>
    </div>
  );
};

"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Variant } from "@/app/types/auth";
import { Input } from "@/app/components";

export const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") setVariant("REGISTER");
    else setVariant("LOGIN");
  }, [variant]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }

    if (variant === "LOGIN") {
      // NextAuth SingIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sing In
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" id="email" register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
};

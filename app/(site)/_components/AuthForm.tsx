"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { Variant } from "@/app/types/auth";
import { Button, Input } from "@/app/components";
import { AuthSocialButton } from ".";

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
      axios.post("/api/register", data);
    }

    if (variant === "LOGIN") {
      // NextAuth SingIn
    }
  };

  const socialAction = (action: "github" | "google") => {
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
      confirm_password: "",
    },
  });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          {variant === "REGISTER" && (
            <Input
              id="confirm_password"
              label="Confirm Password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Button disabled={isLoading} fullWidth type="submit">
            {variant === "LOGIN" ? "Sing in" : "Register"}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />

            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("github")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div
            onClick={toggleVariant}
            className="underline cursor-pointer hover:text-sky-500 duration-300"
          >
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-16">
        <h2 className="text-7xl font-extralight">Sign Up Now</h2>
        <p className="border-2 border-[#4C2F17] w-[200px] mt-4"></p>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-6">
            <div className="md:w-2/5 mx-auto">
              <input
                type="text"
                {...register("fullName", { required: true })}
                name="fullName"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black"
              />
              {errors.fullName && (
                <span className="text-red-500">Full Name is required</span>
              )}
            </div>
            <div className="md:w-2/5 mx-auto">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="md:w-2/5 mx-auto">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>

          <div className="md:w-1/4 mx-auto">
            <button
              type="submit"
              className="w-full rounded-3xl py-3 border-2 border-[#4C2F17] text-[#4C2F17] md:text-lg transition-all duration-300 hover:bg-[#4C2F17] hover:text-white"
            >
              Sign Up
            </button>
          </div>
          <SocialLogin />
          <div className="text-center">
            <p className="pb-6">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log In Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

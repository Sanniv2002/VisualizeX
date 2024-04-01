"use client";
import Link from "next/link";
import Quotes from "@/components/Quotes";
import { useEffect, useMemo, useRef, useState } from "react";
import { signup } from "../actions/user";
import { createHash } from "crypto";
import Toast from "@/components/toast";
import { signIn } from "next-auth/react";

export default function Page() {
  const [quote, setQuote] = useState<JSX.Element | null>(null);

  //States for form
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toast, setToast] = useState<boolean>(false);
  const [success, setSuccess] = useState<{
    success: boolean;
    warning: string;
  }>();

  //State for a single button
  const [clicked, setClicked] = useState<boolean>(false);

  const nameRef = useRef("")
  const emailRef = useRef("")
  const passRef = useRef("")

  //Fixing Hydration Error
  useEffect(() => {
    setQuote(Quotes);
  }, []);

  const onSubmit = async () => {
    setClicked(true);
    console.log(nameRef.current, emailRef.current, passRef.current)
    const result = await signIn("signup", {
      name: nameRef.current,
      email: emailRef.current,
      password: passRef.current,
      redirect: true,
      callbackUrl: "/dashboard"
    })
    setClicked(false);
  }

  return (
    <main className="lg:grid lg:grid-cols-2 bg-gray-900 h-screen items-center">
      {toast ? (
        <Toast
          success={success?.success as boolean}
          warning={success?.warning as string}
        />
      ) : null}
      <div className="hidden lg:flex flex-col items-center h-screen justify-center text-white text-3xl w-96 max-h-24 m-60 text-center">
        {quote}
      </div>
      <div className="flex flex-col items-center h-screen justify-center">
        <h2 className="text-white font-semibold text-xl">
          Create a VisualizeX account
        </h2>
        <h2 className=" text-gray-400 mt-3">
          Welcome! Please enter your details.
        </h2>
        <div className="my-8">
          <h2 className="text-white text-sm mb-2">Name</h2>
          <input
            onChange={(e) => nameRef.current = e.target.value}
            className="bg-gray-800 p-2 rounded-lg w-80 text-gray-300"
            type="text"
            placeholder="Name"
          />
          <h2 className="text-white text-sm mb-2 mt-3">Email</h2>
          <input
            onChange={(e) => emailRef.current = e.target.value}
            className="bg-gray-800 p-2 rounded-lg w-80 text-gray-300"
            type="email"
            placeholder="Email Address"
          />
          <h2 className="text-white text-sm mb-2 mt-3">Password</h2>
          <input
            onChange={(e) => passRef.current = e.target.value}
            className="bg-gray-800 p-2 rounded-lg w-80 text-gray-300"
            type="password"
            placeholder="Password"
          />
        </div>
        {!clicked ? (
          <button
            onClick={onSubmit}
            className=" bg-indigo-700 text-gray-200 p-2 rounded-xl w-80 hover:bg-gray-600 hover:text-gray-300 transition-colors duration-300"
          >
            Sign Up
          </button>
        ) : (
          <div className="flex items-center justify-center space-x-2 bg-indigo-700 p-4 rounded-xl w-80 hover:bg-gray-600">
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
          </div>
        )}

        <h2 className="text-gray-500 text-sm mt-5">
          Already have an account?{" "}
          <Link href="/signin">
            {" "}
            <span className="text-indigo-700 hover:underline cursor-pointer">
              Sign In
            </span>
          </Link>
        </h2>
      </div>
    </main>
  );
}
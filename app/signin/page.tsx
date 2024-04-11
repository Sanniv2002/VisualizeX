"use client";
import Link from "next/link";
import Quotes from "@/components/Quotes";
import { useEffect, useState, useRef } from "react";
import Toast from "@/components/toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/app/utils/schema"

export default function Page() {
  const [quote, setQuote] = useState<JSX.Element | null>(null);

  const [toast, setToast] = useState<boolean>(false)
  const [success, setSuccess] = useState<{success: boolean; warning: string}>()

  //State for a single button
  const [clicked, setClicked] = useState<boolean>(false);

  const emailRef = useRef("")
  const passRef = useRef("")

  const router = useRouter()

  //Fixing Hydration Error
  useEffect(() => {
    setQuote(Quotes);
  }, []);

  const onSubmit = async () => {
    setClicked(true);
    const data = {
      email: emailRef.current,
      password: passRef.current
    }
    try{
      if(signInSchema.parse(data)){
        const result = await signIn("credentials", {
          email: emailRef.current,
          password: passRef.current,
          redirect: false,
          callbackUrl: "/dashboard"
        })
        if(!result?.ok)
        {
          setToast(true);
          setSuccess({
            success: false,
            warning: "Wrong Password/user doesn't exists"
          })
          setTimeout(() => setToast(false), 3000);
        }
        else{
          router.push("/dashboard")
        }
    
        setClicked(false);
      }
    }
    catch(e: any){
      setToast(true);
          setSuccess({
            success: false,
            warning: "Check if email is valid or password is too short"
          })
          setTimeout(() => setToast(false), 3000);
      setClicked(false);
    }

  }

  return (
    <main className="lg:grid lg:grid-cols-2 bg-gray-900 h-screen flex justify-center items-center">

      {toast? <Toast success={success?.success as boolean} warning={success?.warning as string} />:null}
      
      <div className="hidden lg:block text-white text-3xl w-80 m-60 text-center">
        {quote}
      </div>
      <div className="flex flex-col items-center pt-24 lg:pt-0">
        <h2 className="text-white font-semibold text-xl">
          Log in to your VisualizeX account
        </h2>
        <h2 className=" text-gray-400 mt-3">
          Welcome back! Please enter your details.
        </h2>
        <div className="mt-8">
          <h2 className="text-white text-sm mb-2">Email</h2>
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
            className=" bg-indigo-700 text-gray-200 p-2 rounded-xl mt-8 w-80 hover:bg-gray-600 hover:text-gray-300 transition-colors duration-300"
          >
            Sign In
          </button>
        ) : (
          <div className="flex items-center justify-center space-x-2 bg-indigo-700 p-4 rounded-xl mt-8 w-80 hover:bg-gray-600">
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
          </div>
        )}
        <h2 className="text-gray-500 text-sm mt-5">
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            {" "}
            <span className="text-indigo-700 hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </h2>
      </div>
    </main>
  );
}

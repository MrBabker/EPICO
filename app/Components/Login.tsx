"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Gamepad2, Section, LoaderCircle } from "lucide-react";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { isLoginState, SetInitialEnter, SetName } from "../features/counter/counterSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const isLogin = useSelector((state: RootState) => state.counter.islogin);
  const dispatch = useDispatch();

  const router = useRouter();
  const [NameOrEmail, SetNameOrEmail] = useState<string>("");
  const [Password, SetPassword] = useState<string>("");
  const [loadingmess, setLoadingmess] = useState<string>("");

  const login = async () => {
    try {
      setLoadingmess("Checking...");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Player/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({
            NameOrEmail,
            Password,
          }),
        },
      );

      if (!res.ok) {
        const errorText = await res.text();

        throw new Error(errorText);
      }

      const data = await res.json();

      console.log(data);

      dispatch(isLoginState(true));
      dispatch(SetInitialEnter(false));

      setLoadingmess("");
      router.push("/");
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        setLoadingmess(error.message);
      } else {
        setLoadingmess("Something went wrong !!");
      }
    }
  };
  return (
    <main
      className="
        min-h-screen
        bg-black
        relative
        overflow-hidden
        pt-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/*<HeaderNav />*/}

      <div
        className="
        min-h-screen
        flex items-center justify-center
        bg-black
        relative
        overflow-hidden
      "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="
          relative
          z-10
          w-[95%]
          max-w-md
          rounded-3xl
          borderss border-purple-500/20
          bgss-white/2
          backdropss-blur-2xl
          shadowss-[0_0_40px_rgba(168,85,247,0.25)]
          p-8
        "
        >
          {/* LOGO */}
          <div className="relative flex flex-col items-center mb-10">
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
      absolute top-0
      w-44 h-44
      rounded-full
      bg-purple-500/20
      blur-3xl
    "
            />

            {/* Main Logo */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
      relative
      w-24 h-24
      rounded-[30px]
      bg-gradient-to-br
      from-purple-500
      via-fuchsia-500
      to-orange-400
      flex items-center justify-center
      shadow-[0_0_40px_rgba(168,85,247,0.45)]
    "
            >
              <Gamepad2 className="text-white w-12 h-12" />

              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
        absolute
        -inset-3
        rounded-[36px]
        border border-white/10
      "
              />
            </motion.div>

            {/* EPICO */}
            <div className="flex gap-1 mt-6">
              {[
                ["E", "#9d64ff"],
                ["P", "#f458ff"],
                ["I", "#ff5858"],
                ["C", "#ffcb0f"],
                ["O", "#16ffa2"],
              ].map(([letter, color], i) => (
                <motion.span
                  key={letter}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{ color }}
                  className="
          text-4xl
          sm:text-5xl
          font-black
          tracking-wide
        "
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
      text-gray-400
      mt-3
      text-xs
      tracking-[0.3em]
      uppercase
      text-center
    "
            >
              Enter The Gaming World
            </motion.p>
          </div>
          {/* FORM */}
          <form className="space-y-5">
            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />

              <input
                type="email"
                onChange={(e) => {
                  SetNameOrEmail(e.target.value);
                  setLoadingmess("");
                }}
                placeholder="Email Address"
                className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-2xl
                bg-black/40
                border border-purple-500/70
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/30
                transition
              "
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  SetPassword(e.target.value);
                  setLoadingmess("");
                }}
                className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-2xl
                bg-black/40
                border border-purple-500/70
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-pink-500
                focus:ring-2
                focus:ring-pink-500/30
                transition
              "
              />
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-purple-500" />
                Remember me
              </label>

              {false && (
                <button
                  type="button"
                  className="text-purple-400 hover:text-pink-400 transition"
                >
                  Forgot Password?
                </button>
              )}
            </div>

            {loadingmess.trim().length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-700 px-8 py-5 rounded-3xl shadow-2xl backdrop-blur-md">
                  <LoaderCircle className="w-8 h-8 text-green-400 animate-spin" />

                  <p className="text-white text-lg font-semibold tracking-wide">
                    {loadingmess}
                  </p>
                </div>
              </div>
            )}
            {/* LOGIN BUTTON */}
            {loadingmess.trim().length <= 0 && (
              <motion.button
                onClick={() => login()}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(168,85,247,0.45)",
                }}
                whileTap={{ scale: 0.98 }}
                className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              font-bold
              text-lg
              tracking-wide
              shadow-lg
            "
              >
                LOGIN
              </motion.button>
            )}
          </form>

          {/* FOOTER */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              New to EPICO?{" "}
              <Link href={"/pages/register"}>
                <span className="text-purple-400 cursor-pointer hover:text-pink-400 transition">
                  Create Account
                </span>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Login;

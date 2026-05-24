"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Gamepad2, Section } from "lucide-react";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

const Login = () => {
  return (
    <main
      className="
        min-h-screen
        bg-black
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <HeaderNav />

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
          <div className="flex flex-col items-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              w-20 h-20
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              flex items-center justify-center
              shadow-lg
            "
            >
              <Gamepad2 className="text-white w-10 h-10" />
            </motion.div>

            <div className=" flex flex-row gap-2">
              <span className=" text-3xl font-extrabold text-[#9d64ff]">E</span>
              <span className="text-3xl font-extrabold text-[#f458ff]">P</span>
              <span className="text-3xl font-extrabold text-[#ff3f3f]">I</span>
              <span className="text-3xl font-extrabold text-[#ffcb0f]">C</span>
              <span className="text-3xl font-extrabold text-[#16ffa2]">O</span>
            </div>

            <p className="text-gray-400 mt-2 text-sm">Enter The Gaming World</p>
          </div>

          {/* FORM */}
          <form className="space-y-5">
            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />

              <input
                type="email"
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

            {/* LOGIN BUTTON */}
            <motion.button
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

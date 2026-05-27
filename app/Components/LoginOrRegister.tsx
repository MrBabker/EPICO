"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import HeaderNav from "./HeaderNav";

const LoginOrRegister = () => {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden pt-0">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

     {  /*<HeaderNav />*/}

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* CARD */}
        <motion.div
         /* initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}*/
          className="
            relative
            z-10
            w-full
            max-w-xl
            rounded-3xl
            border border-purple-500/20
            bg-white/5
            backdrop-blur-2xlss
            shadow-[0_0_40px_rgba(168,85,247,0.25)]
            p-8
          "
        >
          {/* LOGO */}
          <div className="flex flex-col items-center mb-10">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                w-24 h-24
                rounded-3xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                flex items-center justify-center
                shadow-[0_0_30px_rgba(168,85,247,0.45)]
              "
            >
              <Gamepad2 className="text-white w-12 h-12" />
            </motion.div>

            {/* EPICO */}
            <div className="flex flex-row gap-2 mt-5">
              <span className="text-4xl font-extrabold text-[#9d64ff]">
                E
              </span>
              <span className="text-4xl font-extrabold text-[#f458ff]">
                P
              </span>
              <span className="text-4xl font-extrabold text-[#ff3f3f]">
                I
              </span>
              <span className="text-4xl font-extrabold text-[#ffcb0f]">
                C
              </span>
              <span className="text-4xl font-extrabold text-[#16ffa2]">
                O
              </span>
            </div>

            <p className="text-gray-400 mt-3 text-center">
              Choose how you want to continue
            </p>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LOGIN */}
            <Link href="/pages/login">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0px 0px 35px rgba(168,85,247,0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  cursor-pointer
                  rounded-3xl
                  border border-purple-500/30
                  bg-black/40
                  p-8
                  flex flex-col items-center
                  justify-center
                  transition
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-20 h-20
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    flex items-center justify-center
                    mb-5
                    shadow-lg
                  "
                >
                  <LogIn className="text-white w-10 h-10" />
                </div>

                <h2 className="text-white text-2xl font-bold mb-2">
                  Login
                </h2>

                <p className="text-gray-400 text-center text-sm">
                  Access your account and continue your adventure.
                </p>
              </motion.div>
            </Link>

            {/* REGISTER */}
            <Link href="/pages/register">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0px 0px 35px rgba(236,72,153,0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  cursor-pointer
                  rounded-3xl
                  border border-pink-500/30
                  bg-black/40
                  p-8
                  flex flex-col items-center
                  justify-center
                  transition
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-20 h-20
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-purple-500
                    flex items-center justify-center
                    mb-5
                    shadow-lg
                  "
                >
                  <UserPlus className="text-white w-10 h-10" />
                </div>

                <h2 className="text-white text-2xl font-bold mb-2">
                  Register
                </h2>

                <p className="text-gray-400 text-center text-sm">
                  Create a new account and join the gaming world.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default LoginOrRegister;
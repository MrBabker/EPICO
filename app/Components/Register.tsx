"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, ShieldCheck, Gamepad2 } from "lucide-react";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

export default function Register() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0717] text-white pt-20 ">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-fuchsia-500/20 blur-3xl rounded-full" />
     {  /*<HeaderNav />*/}
      <main className="relative min-h-screen overflow-hidden bg-[#0b0717] text-white flex items-center justify-center px-6 py-5">
        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-fuchsia-500/20 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-5">
              <Gamepad2 className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200">Join The Arena</span>
            </div>

            <div className=" flex flex-row justify-center justify-items-center gap-4">
              <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                REGISTER
              </h1>
              <div className=" bg-[#a95eff73] rounded-full border-2  justify-center justify-items-center object-cover ">
                <Image
                  src={"/img/like.png"}
                  alt="background"
                  height={50}
                  width={50}
                />
              </div>
            </div>

            <p className="text-gray-400 mt-4">
              Create your gaming account and start your adventure.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-purple-500/20 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            {/* Username */}
            <div className="mb-5">
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <User size={16} />
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="
                w-full px-4 py-3
                rounded-2xl
                bg-black/30
                border border-purple-500/20
                outline-none
                focus:border-purple-400
                transition
              "
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <Mail size={16} />
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                w-full px-4 py-3
                rounded-2xl
                bg-black/30
                border border-purple-500/20
                outline-none
                focus:border-purple-400
                transition
              "
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <Lock size={16} />
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="
                w-full px-4 py-3
                rounded-2xl
                bg-black/30
                border border-purple-500/20
                outline-none
                focus:border-purple-400
                transition
              "
              />
            </div>
            {/*confirm Password */}
            <div className="mb-6">
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <Lock size={16} />
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="
                w-full px-4 py-3
                rounded-2xl
                bg-black/30
                border border-purple-500/20
                outline-none
                focus:border-purple-400
                transition
              "
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(168,85,247,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
              w-full py-3
              rounded-2xl
              bg-purple-500/20
              border border-purple-400/30
              flex items-center justify-center gap-2
              text-purple-100 font-semibold
            "
            >
              <ShieldCheck size={18} />
              Create Account
            </motion.button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <Link href={"/pages/login"}>
                {" "}
                <span className="text-purple-300 cursor-pointer hover:text-purple-200 transition">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </section>
  );
}

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, LogIn, Snowflake, Star, UserPlus } from "lucide-react";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// 🎯 Mobile hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const LoginOrRegister = () => {
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);
  const isMobile = useIsMobile();
  // ⚡ particles optimized
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 25;

    return Array.from({ length: count }).map((_, i) => ({
      x: (i * 37) % 100,
      y: (i * 71) % 100,
      vx: (i % 2 === 0 ? 1 : -1) * (0.05 + (i % 5) * 0.02),
      vy: (i % 3 === 0 ? 1 : -1) * (0.04 + (i % 4) * 0.02),
      size: isMobile ? 5 : 5 + (i % 3),
    }));
  }, [isMobile]);
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#09090b] via-[#111827] to-[#0f172a] relative overflow-hidden pt-20">
      {/*<HeaderNav />*/}
      {/* ✨ Particles */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        {!isMobile &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-400/0 rounded-full  md:sblur-sm"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={
                isMobile
                  ? {
                      x: [0, p.vx * 100, 0],
                      y: [0, p.vy * 100, 0],
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1 / 3, 1.6 / 3, 1 / 3],
                    }
                  : {
                      x: [0, p.vx * 200, 0],
                      y: [0, p.vy * 200, 0],
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1 / 2, 1.6 / 2, 1 / 2],
                    }
              }
              transition={{
                duration: isMobile ? 4 : 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Star className="fill-[#ffffff35] text-[#6adcff98]" />
            </motion.div>
          ))}
      </div>

      {isMobile && (
        <div className="fixed inset-0 pointer-events-none particles" />
      )}
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
           
            bg-white/0
            md:backdrops-blur-2xlss
            md:shadowss-[0_0_40px_rgba(168,85,247,0.25)]
            p-8
          "
        >
          {/* LOGO */}
          <div className="relative flex flex-col items-center mb-10">
            {/* Glow */}
            <div
              className="
      absolute top-0
      md:sw-44 md:h-s44
      rounded-full
      bg-purple-500/20
      md:blurs-3xl
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
      md:shadow-[0_0_40px_rgba(168,85,247,0.45)]
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
            <p
              className="
      text-gray-400
      mt-3
      text-xs
      tracking-[0.3em]
      uppercase
      text-center
    "
            >
              {isArabic ? "ادخـل لـعـالـم الالـعـاب" : "Enter The Gaming World"}
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
                  md:ssbackdrop-blur-xl
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
                    md:ssshadow-lg
                  "
                >
                  <LogIn className="text-white w-10 h-10" />
                </div>

                <h2 className="text-white text-2xl font-bold mb-2">
                  {isArabic ? "تسجيل الدخول" : "Login"}
                </h2>

                <p className="text-gray-400 text-center text-sm">
                  {isArabic
                    ? "قـم بالـدخول إلـى حسـابك واسـتـمـر في مـغـامـرتك."
                    : "Access your account and continue your adventure."}
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
                  md:ssbackdrop-blur-xl
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
                    md:sshadow-lg
                  "
                >
                  <UserPlus className="text-white w-10 h-10" />
                </div>

                <h2 className="text-white text-2xl font-bold mb-2">
                  {isArabic ? "انشاء حساب" : "Register"}
                </h2>

                <p className="text-gray-400 text-center text-sm">
                  {isArabic
                    ? "أنـشـئ حـسـابًـا جـديـدًا وانـضم إلـى عـالم الألـعـاب."
                    : "Create a new account and join the gaming world."}
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

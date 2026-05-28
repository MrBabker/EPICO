"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Gamepad2,
  Section,
  LoaderCircle,
  Star,
  EyeOff,
  Eye,
} from "lucide-react";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  isLoginState,
  SetInitialEnter,
  SetName,
} from "../features/counter/counterSlice";
import { useRouter } from "next/navigation";

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

const Login = () => {
  const isLogin = useSelector((state: RootState) => state.counter.islogin);
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);

  const dispatch = useDispatch();

  const router = useRouter();
  const [NameOrEmail, SetNameOrEmail] = useState<string>("");
  const [Password, SetPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingmess, setLoadingmess] = useState<string>("");

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
  const login = async () => {
    try {
      setLoadingmess(isArabic ? "تحقق" : "Checking...");

      if (NameOrEmail.trim().length <= 0 || Password.trim().length <= 0) {
        setLoadingmess(
          isArabic ? "بياناتك ناقصة" : "Your data is not complete",
        );
        return;
      }
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
      {/*<HeaderNav />*/}

      <div
        className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-b from-[#09090b] via-[#1c1127] to-[#1d001b]
        relative
        overflow-hidden
      "
      >
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
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1 / 3, 1.6 / 3, 1 / 3],
                      }
                    : {
                        x: [0, p.vx * 200, 0],
                        y: [0, p.vy * 200, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1 / 3, 1.6 / 3, 1 / 3],
                      }
                }
                transition={{
                  duration: isMobile ? 4 : 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Star className="fill-[#aa00ff6b] text-[#aa00ff6b]" />
              </motion.div>
            ))}
        </div>

        {isMobile && (
          <div className="fixed inset-0 pointer-events-none particles" />
        )}

      
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
          md:shadowss-[0_0_40px_rgba(168,85,247,0.25)]
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
              md:w-44 md:h-44
              rounded-full
              bg-purple-500/20
              md:blur-3xl
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
              {isArabic ? "ادخـل لـعـالـم الالـعـاب" : "Enter The Gaming World"}
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
                placeholder={
                  isArabic
                    ? "المستخدم او البريد الالكتروني"
                    : "Email Address Or Username"
                }
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

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder={isArabic ? "كلمة السر" : "Password"}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                    setLoadingmess("");
                  }}
                  className="
      w-full
      pl-12
      pr-12
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

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-gray-400
      hover:text-white
      transition
    "
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              {/*<label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-purple-500" />
                Remember me
              </label>*/}

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
              shadows-lg
            "
              >
                {isArabic ? "تسجيل الدخول" : "LOGIN"}
              </motion.button>
            )}
          </form>

          {/* FOOTER */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm flex flex-row justify-center gap-1">
              {isArabic ? "EPICO ? جديد في عالم" : "New to EPICO?"}{" "}
              <Link href={"/pages/register"}>
                <span className="text-purple-400 cursor-pointer hover:text-pink-400 transition">
                  {isArabic ? "انشاء حساب" : "Create Account"}
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

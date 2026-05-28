"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  Gamepad2,
  LoaderCircle,
  EyeOff,
  Eye,
} from "lucide-react";

import Link from "next/link";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  isLoginState,
  SetEmail,
  SetInitialEnter,
} from "../features/counter/counterSlice";

export default function Register() {
  const isLogin = useSelector((state: RootState) => state.counter.islogin);
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);

  const dispatch = useDispatch();

  const router = useRouter();
  const [Name, SetName] = useState<string>("");
  const [Email, SetEmails] = useState<string>("");
  const [Password, SetPassword] = useState<string>("");
  const [ConfirmPassword, SetConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingmess, setLoadingmess] = useState<string>("");

  const Register = async () => {
    if (ConfirmPassword != Password) {
      setLoadingmess(
        isArabic
          ? "تأكيد كلمة السر غير مطابقة"
          : "Password confirmation does not match !",
      );
      return;
    }

    if (
      ConfirmPassword.trim().length <= 0 ||
      Password.trim().length <= 0 ||
      Email.trim().length <= 0 ||
      Name.trim().length <= 0
    ) {
      setLoadingmess(
        isArabic
          ? "لا يمكنك ترك اي خانة فارغة !!!"
          : "Do not let any field empty",
      );
      return;
    }
    try {
      setLoadingmess("Checking...");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Player/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({
            Name,
            Email,
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09090b] via-[#111827] to-[#140f2a] text-white pt-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Grid */}
        {
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        }{" "}
      </div>

      {/* CONTENT */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 lg:px-10">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center items-center"
          >
            {/* LOGO SECTION */}
            <div className="relative flex flex-col items-center">
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
                  lg:w-72 lg:h-72
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
                  w-20 h-20
                  sm:w-24 sm:h-24
                  lg:w-32 lg:h-32
                  rounded-[28px]
                  lg:rounded-[32px]
                  bg-gradient-to-br
                  from-purple-500
                  via-fuchsia-500
                  to-orange-400
                  flex items-center justify-center
                  md:shadowss-[0_0_40px_rgba(168,85,247,0.4)]
                "
              >
                <Gamepad2
                  className="
                    text-white
                    w-10 h-10
                    sm:w-12 sm:h-12
                    lg:w-16 lg:h-16
                  "
                />

                {/* Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -inset-2
                    lg:-inset-4
                    rounded-[34px]
                    lg:rounded-[40px]
                    border border-white/10
                  "
                />
              </motion.div>

              {/* EPICO */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  flex gap-[2px]
                  sm:gap-1
                  mt-5 sm:mt-6 lg:mt-8
                "
              >
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
                      text-3xl
                      sm:text-4xl
                      lg:text-7xl
                      font-black
                      tracking-wide
                    "
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subtitle */}
              <p
                className="
                  text-gray-400
                  mt-3 lg:mt-5
                  text-[10px]
                  sm:text-xs
                  lg:text-sm
                  tracking-[0.25em]
                  lg:tracking-[0.35em]
                  uppercase
                  text-center
                "
              >
                {isArabic
                  ? "ادخـــل لـعــالـــم الألـــعــاب"
                  : "Enter The Gaming World"}
              </p>

              {/* STATS */}
              {/* <div className="hidden lg:flex gap-4 mt-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 ">
                  <h2 className="text-3xl font-bold text-purple-300">25K+</h2>
                  <p className="text-gray-400 text-sm mt-1">{isArabic?'اللاعبين':'Players'}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 ">
                  <h2 className="text-3xl font-bold text-fuchsia-300">120+</h2>
                  <p className="text-gray-400 text-sm mt-1">{isArabic?'الفعاليات':'Events'}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 ">
                  <h2 className="text-3xl font-bold text-cyan-300">99%</h2>
                  <p className="text-gray-400 text-sm mt-1">{isArabic?'التنافس':'Competitive'}</p>
                </div>
              </div>*/}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-lg mx-auto"
          >
            {/* CARD */}
            <div className="relative overflow-hidden rounded-[32px] p-6 sm:p-8 ">
              {/* Card glow */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Title */}
              <div className="text-center mb-8">
                <div
                  className={
                    isArabic
                      ? "text-2xl md:h-15 sm:text-5xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent"
                      : "text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent"
                  }
                >
                  {isArabic ? "تـسـجـيـل الـدخـول" : "REGISTER"}
                </div>

                <p className="text-gray-400 mt-3 text-sm sm:text-base">
                  {isArabic
                    ? "أنشئ حسابك وابدأ رحلتك."
                    : "Create your account and start your journey."}
                </p>
              </div>

              {/* Username */}
              <InputField
                icon={<User size={18} />}
                label={isArabic ? "اسم المستخدم" : "Username"}
                placeholder={
                  isArabic ? "ادخل اسم المستخدم" : "Enter your username"
                }
                type="text"
                no={1}
                setInfo={SetName}
                setMessage={setLoadingmess}
                showPass={showPassword}
                SetShowpassword={setShowPassword}
              />

              {/* Email */}
              <InputField
                icon={<Mail size={18} />}
                label={isArabic ? "البريد الالكتروني" : "Email"}
                placeholder={isArabic ? "ادخل ايميلك" : "Enter your email"}
                type="email"
                no={2}
                setInfo={SetEmails}
                setMessage={setLoadingmess}
                showPass={showPassword}
                SetShowpassword={setShowPassword}
              />

              {/* Password */}
              <InputField
                icon={<Lock size={18} />}
                label={isArabic ? "كلمة السر" : "Password"}
                placeholder={isArabic ? "كلمة السر" : "Create password"}
                type={showPassword ? "text" : "password"}
                no={3}
                setInfo={SetPassword}
                setMessage={setLoadingmess}
                showPass={showPassword}
                SetShowpassword={setShowPassword}
              />

              {/* Confirm Password */}
              <InputField
                icon={<Lock size={18} />}
                label={isArabic ? "تأكيد كلمة السر" : "Confirm Password"}
                placeholder={isArabic ? "تأكيد كلمة السر" : "Confirm password"}
                type="password"
                no={4}
                setInfo={SetConfirmPassword}
                setMessage={setLoadingmess}
                showPass={showPassword}
                SetShowpassword={setShowPassword}
              />

              {/* BUTTON */}
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
              {loadingmess.trim().length <= 0 && (
                <motion.button
                  onClick={() => Register()}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-600
                  font-semibold
                  text-white
                  shadowss-[0_0_25px_rgba(168,85,247,0.35)]
                "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10" />

                  <span className="relative flex items-center justify-center gap-2">
                    <ShieldCheck size={18} />
                    {isArabic ? "انشاء الحساب" : "Create Account"}
                  </span>
                </motion.button>
              )}

              {/* Footer */}
              <p className="text-center text-sm text-gray-400 mt-6">
                {isArabic ? "ليك حساب ؟" : "Already have an account?"}{" "}
                <Link
                  href="/pages/login"
                  className="text-purple-300 hover:text-white transition"
                >
                  {isArabic ? "تسجيل الدخول" : "Login"}
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}

/* INPUT FIELD */
function InputField({
  no,
  icon,
  label,
  placeholder,
  type,
  setInfo,
  setMessage,
  showPass,
  SetShowpassword,
}: {
  no: number;
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  showPass: boolean;
  SetShowpassword: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="mb-5">
      <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
        {icon}
        {label}
      </label>

      <div className="group relative">
        <div className="absolute inset-0 rounded-2xl  group-focus-within:opacity-100 blur-xl transition duration-300" />

        <div className="relative w-full">
          <input
            onChange={(e) => {
              setInfo(e.target.value);
              setMessage("");
            }}
            type={type}
            placeholder={placeholder}
            required
            className="
      w-full
      px-4
      py-3.5
      pr-12
      rounded-2xl
      bg-black/30
      border
      border-[#e3b6ff7e]
      text-white
      placeholder:text-gray-500
      outline-none
      transition-all
      duration-300
      focus:border-purple-400
      focus:bg-black/40
    "
          />

          {no === 3 && (
            <button
              type="button"
              onClick={() => SetShowpassword(!showPass)}
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
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

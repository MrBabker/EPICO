"use client";
import {
  Gamepad2,
  Trophy,
  Star,
  Info,
  Contact,
  FanIcon,
  Superscript,
  SubscriptIcon,
  LucideSword,
  SwordsIcon,
  HomeIcon,
  LoaderCircle,
  Crown,
  Languages,
  ShieldCheck,
  LogOut,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { em, map } from "framer-motion/client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/navigation";
import {
  isLoginState,
  SetArabic,
  SetEmail,
  SetInitialEnter,
  SetLevel,
  SetName,
  SetPoints,
  SetUsername,
} from "../features/counter/counterSlice";
import { getRankByPoints, ranks } from "../utils";

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

export default function HeaderNav() {
  const isMobile = useIsMobile();
  const isLogin = useSelector((state: RootState) => state.counter.islogin);
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);
  const initialEnter = useSelector(
    (state: RootState) => state.counter.initialEnter,
  );
  const name = useSelector((state: RootState) => state.counter.Name);
  const email = useSelector((state: RootState) => state.counter.Email);
  const points = useSelector((state: RootState) => state.counter.Points);

  const dispatch = useDispatch();

  const router = useRouter();
  const [initialLoad, setInitialLoad] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRanks, setOpenRanks] = useState(false);
  const [loadingmess, setLoadingmess] = useState<string>("");

  useEffect(() => {
    const GetCurrentPlayer = async () => {
      try {
        if (initialEnter) {
          setInitialLoad(false);
          return;
        }
        setInitialLoad(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/Player/current`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );

        if (!res.ok) {
          dispatch(isLoginState(false));
          dispatch(SetInitialEnter(true));
          setInitialLoad(false);
          throw new Error("Failed to fetch");
        }
        setInitialLoad(false);
        const data = await res.json();

        dispatch(SetName(data.name));
        dispatch(SetEmail(data.email));
        dispatch(SetUsername(data.username));
        dispatch(SetPoints(data.points));
        dispatch(SetLevel(data.level));

        dispatch(isLoginState(true));
        dispatch(SetInitialEnter(true));
      } catch (error) {
        setInitialLoad(false);
        console.log(error);
        dispatch(isLoginState(false));
      }
    };
    GetCurrentPlayer();
  }, []);

  const logout = async () => {
    try {
      setLoadingmess(isArabic ? "التأكد من البيانات..." : "Checking...");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Player/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        const errorText = await res.text();

        throw new Error(errorText);
      }

      const data = await res.json();

      console.log(data);

      dispatch(isLoginState(false));

      setLoadingmess("");
      router.push("/");
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        setLoadingmess(error.message);
      } else {
        setLoadingmess(
          isArabic ? "حدث خطأ !! جرب مرة أخرى" : "Something went wrong !!",
        );
      }
    }
  };
  return (
    <div className=" absolute w-full">
      <div>
        {" "}
        {/* HEADER */}
        <header
          className={`z-20 flex items-center justify-between p-4 sm:p-6 border-b border-purple-500/20 backdrop-blur-md ${
            menuOpen ? "relative" : "relative"
          }`}
        >
          {" "}
          {/* LOGO */}
          <Link href={"/"}>
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="
      relative
      flex
      items-center
      gap-4
      select-none
      group
      w-fit
    "
            >
              {/* Glow */}
              <div
                className="
        absolute
        inset-0
        bg-purple-500/10
        blur-2xl
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
      "
              />

              {/* Logo Icon */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
        relative
        w-12 h-12
        sm:w-14 sm:h-14
       rounded-[18px]
        bg-gradient-to-br
        from-purple-500
        via-fuchsia-500
        to-orange-400
        flex
        items-center
        justify-center
        md:shadows-[0_0_25px_rgba(168,85,247,0.35)]
      "
              >
                {/*shadow-[0_0_25px_rgba(168,85,247,0.35)]*/}
                <Gamepad2 className="text-white w-6 h-6 sm:w-7 sm:h-7" />

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
          -inset-1
          rounded-[18px]
          border border-white/10
        "
                />
              </motion.div>

              {/* Text */}
              <div className="flex flex-col leading-none">
                {/* EPICO */}
                <div className="flex gap-[2px] sm:gap-1">
                  {[
                    ["E", "#9d64ff"],
                    ["P", "#f458ff"],
                    ["I", "#ff5858"],
                    ["C", "#ffcb0f"],
                    ["O", "#16ffa2"],
                  ].map(([letter, color], i) => (
                    <span
                      key={letter}
                      style={{ color }}
                      className="
              text-2xl
              sm:text-3xl
              font-black
              tracking-wide
            "
                    >
                      {letter}
                    </span>
                  ))}
                </div>

                {/* Subtitle */}
                <div
                  className="
          hidden md:flex
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-gray-400
          mt-1
        "
                >
                  <SwordsIcon className="w-3 h-3 text-purple-400" />
                  {!isArabic
                    ? " Game World"
                    : "عـــالـــــــــــم الألـــعـــاب"}
                </div>
              </div>
            </motion.div>
          </Link>
          {/* DESKTOP NAV */}
          <div className="flex items-center gap-4 ">
            {/* LOGIN BUTTON */}
            <div className="hidden lg:block">
              {" "}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {!isLogin ? (
                  <Link href={"/pages/login"}>
                    {" "}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0px 0px 20px rgba(168,85,247,0.7)",
                      }}
                      whileTap={{
                        scale: 0.92,
                      }}
                      className="
          px-5 py-2
          bg-purple-600
          text-white
          font-bold
          rounded-full
        "
                    >
                      {!isArabic ? " Login" : "تسجيل الدخول"}
                    </motion.div>
                  </Link>
                ) : (
                  <div>
                    <h1
                      className="
          px-5 py-2
          bg-purple-600
          text-white
          font-bold
          rounded-full
        "
                    >
                      {isArabic ? "مرحبا" : "Hello"} {name}
                    </h1>
                  </div>
                )}
              </motion.div>
            </div>
            {isLogin && (
              <div
                onClick={() => setOpenRanks(true)}
                className="
      relative cursor-pointer select-none

      w-10 h-10 md:w-12 md:h-12

      transition-transform duration-150
      hover:scale-110 active:scale-90

      animate-float
      flex items-center justify-center
    "
              >
                <div
                  className="
        w-full h-full
        rounded-full
        overflow-hidden
        border border-white/10
        bg-[#111]
        md:shadow-lg
      "
                >
                  <Image
                    src={getRankByPoints(points).name.path}
                    alt="Rank"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md: text-purple-400"
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
          {/* MOBILE MENU BUTTON */}
          {/* MOBILE MENU */}
        </header>
        {/* MOBILE SLIDE MENU */}
        <div
          className={`
    fixed top-0 right-0
    h-screen w-[320px]
    bg-gradient-to-b from-[#251743] via-[#111827] to-[#0f172a]
    border-l border-purple-500/20
    md:ssbackdrop-blur-xl
    z-[1000]
    flex flex-col

    transform-gpu
    transition-transform duration-300
    ease-[cubic-bezier(0.34,1.2,0.64,1)]

    ${menuOpen ? "translate-x-0" : "translate-x-full"}
  `}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-purple-400  p-6 "
          >
            <X size={32} />
          </button>
          {/* ACCOUNT SECTION */}
          {isLogin ? (
            <div className="w-full justify-end justify-items-end ">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 25px rgba(168,85,247,0.35)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className=" w-full
     flex flex-row-reverse items-center gap-4
      px-4 py-3
      rounded-3xl
      bg-white/5
      border border-purple-500/20
      ssbackdrop-blur-xl
    "
              >
                {/* AVATAR */}
                <div
                  onClick={() => {
                    setOpenRanks(true);
                    setMenuOpen(false);
                  }}
                  className="
        relative
        w-16 h-16 md:w-20 md:h-20
        rounded-full
        p-[3px]
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        shadow-lg
      "
                >
                  {/* IMAGE */}
                  <div className="w-full h-full rounded-full  bg-black">
                    <Image
                      src={getRankByPoints(points).name.path}
                      alt="Account Avatar"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover select-none"
                      priority
                    />
                  </div>

                  {/* ONLINE DOT */}
                  <div
                    className="
          absolute bottom-1 right-1
          w-3 h-3
          bg-green-400
          rounded-full
          border-2 border-black
        "
                  />
                </div>
                {/* USER INFO */}
                <div className="flex flex-col text-right">
                  <h2 className="text-white font-bold text-lg leading-none">
                    {name}
                  </h2>

                  <p className="text-sm text-gray-400">{email}</p>

                  {/* EXTRA INFO */}
                  <div className="flex items-center gap-2 mt-2">
                    <div
                      className="
            px-2 py-1
            rounded-full
            bg-purple-500/20
            text-purple-300
            text-xs font-semibold
          "
                    >
                      {points} EP
                    </div>

                    <div
                      className="
            px-2 py-1
            rounded-full
            bg-yellow-500/20
            text-yellow-300
            text-xs font-semibold
          "
                    >
                      {!isArabic
                        ? getRankByPoints(points).name.en
                        : getRankByPoints(points).name.ar}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div
              onClick={() => router.push("/pages/login")}
              className="w-full justify-items-end justify-end"
            >
              {" "}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 25px rgba(168,85,247,0.35)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="
      flex  flex-row-reverse items-center gap-4 w-full
      px-5 py-4
      rounded-3xl
      bg-white/5
      border border-purple-500/20
      md:ssbackdrop-blur-xl 
    "
              >
                {/* AVATAR PLACEHOLDER */}
                <div
                  className="
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        bg-gradient-to-r from-purple-500 to-pink-500
        flex items-center justify-center
        text-white font-bold
        text-lg
      "
                >
                  ?
                </div>

                {/* TEXT */}
                <div className="flex flex-col text-right">
                  <h2 className="text-white font-bold text-lg leading-none">
                    {!isArabic ? " No account" : "لا يوجد حساب"}
                  </h2>

                  {/*<p className="text-sm text-gray-400">
                    Please sign in to continue
                  </p>*/}
                  {/* LOGIN BUTTON */}
                  <button
                    className="
          mt-2
          px-3 py-1
          rounded-full
          bg-purple-500/20
          text-purple-300
          text-xs font-semibold
          hover:bg-purple-500/30
          transition w-full
        "
                  >
                    {!isArabic ? "Sign In" : "سجل دخولك"}
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* LINKS */}
          <div
            className="flex flex-col py-4  text-xl font-semibold  overflow-y-auto scrollbar-hide
  overflow-x-hidden"
          >
            <div
              className="
    group
    relative
    rounded-2xl
    border border-white/10
    bg-white/5
    ssbackdrop-blur-sm
    transition-all duration-300
    hover:border-purple-500/40
    hover:bg-purple-500/10
    hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
  "
            >
              <button
                onClick={() => {
                  dispatch(SetArabic(!isArabic));
                }}
                className="
      flex items-center justify-between
      w-full p-4
      text-white
      transition-all duration-300
      group-hover:text-purple-200
    "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
          p-2 rounded-xl
          bg-purple-500/15
          border border-purple-400/20
        "
                  >
                    <Languages
                      className="
            w-5 h-5
            text-purple-300
            transition-transform duration-300
            group-hover:rotate-12
          "
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-sm md:text-base">
                      {!isArabic ? " Language" : "الـلــغـة"}
                    </span>

                    <span className="text-xs text-white/50">
                      {!isArabic ? " Change app language" : "تعير لغة التطبيق"}
                    </span>
                  </div>
                </div>

                <span
                  className="
        text-xs px-2 py-1 rounded-full
        bg-white/10
        text-white/60
        border border-white/10
      "
                >
                  {!isArabic ? "EN" : "AR"}
                </span>
              </button>

              <div
                className="
      absolute inset-0 opacity-0
      bg-gradient-to-r from-purple-500/10 to-indigo-500/10
      transition-opacity duration-300
      group-hover:opacity-100
      pointer-events-none
    "
              />
            </div>
            <div className="p-[0.2px] bg-purple-500/30"></div>
            <div className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
              <Link
                className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
                href="/"
              >
                {!isArabic ? "Home" : "الرئيسية"}
                <HomeIcon />
              </Link>
            </div>
            <div className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
              <Link
                className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
                href="/pages/about"
              >
                {!isArabic ? "About" : "حول التطبيق"}
                <Info />
              </Link>
            </div>
            <div className="text-[#ffc507] font-bold text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
              <button
                className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
                onClick={() => {
                  setOpenRanks(true);
                  setMenuOpen(false);
                }}
              >
                {!isArabic ? "Ranks" : "التصنيفات"}
                <Crown />
              </button>
            </div>
            <div className="p-[0.2px] bg-purple-500/30"></div>
            {/* 2ec Section */}
            <div className="flex flex-col py-4  text-xl font-semibold  ">
              <div className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
                <Link
                  className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
                  href="/pages/privacy"
                >
                  {!isArabic ? "Privacy Policy" : "سياسة الخصوصية"}
                  <ShieldCheck />
                </Link>
              </div>
            </div>
            {/*Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition "
            >
              <Link
                className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
                href="/pages/about"
              >
                About
                <Info />
              </Link>
            </div>
          ))*/}
            <div className="p-[0.2px] bg-purple-500/30"></div>
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
            {isLogin && loadingmess.trim().length <= 0 && (
              <div className=" p-5 w-full">
                <motion.button
                  onClick={() => logout()}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.06 }}
                  className="
    w-full
    mt-4
    px-5 py-3

    bg-gradient-to-r
    from-purple-600
    to-fuchsia-600

    text-white
    font-bold

    rounded-[20px]

    flex
    items-center
    justify-center
    gap-2

    md:shadow-lg
    md:shadow-purple-500/20

    transition-all
    duration-300

    cursor-pointer
  "
                >
                  <LogOut className="w-5 h-5" />

                  {!isArabic ? "Log out" : "تسجيل الخروج"}
                </motion.button>
                <Link href="/pages/accdelete">
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.06 }}
                    className="
    w-full
    mt-4
    px-5 py-3

    bg-gradient-to-r
    from-red-600
    to-rose-600

    text-white
    font-bold

    rounded-[20px]

    flex
    items-center
    justify-center
    gap-2

    md:shadow-lg
    md:shadow-red-500/20

    transition-all
    duration-300

    cursor-pointer
  "
                  >
                    <Trash2 className="w-5 h-5" />

                    {!isArabic ? "Delete account" : "حذف الحساب"}
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
          <div className="p-[0.2px] bg-purple-500/30"></div>
        </div>
        {/* MOBILE MENU OVERLAY */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="
  fixed  inset-0
  h-full
  bg-black/60
  md:ssbackdrop-blur-xs
  z-100
  
"
          />
        )}
        {initialLoad && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              transition: { duration: 0.5 },
            }}
            className="
      fixed inset-0 z-[100]
      flex items-center justify-center
      overflow-hidden
      bg-[#0b0b0f]
    "
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${100}%`,
                    bottom: "-20px",
                  }}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="relative flex flex-col items-center">
              {/* Glow behind logo */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
          absolute top-0
          w-60 h-60
          rounded-full
          md:bg-purple-500/20
          md:blur-3xl
        "
              />

              {/* Logo */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
          relative
          w-24 h-24
          rounded-3xl
          bg-gradient-to-br
          from-purple-500
          via-pink-500
          to-orange-400
          flex items-center justify-center
          md:shadow-[0_0_40px_rgba(168,85,247,0.45)]
        "
              >
                <Gamepad2 className="text-white w-12 h-12" />

                {/* rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
            absolute -inset-3
            rounded-[30px]
            border border-white/10
          "
                />
              </motion.div>

              {/* Brand name */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex gap-1 mt-6"
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
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    style={{ color }}
                    className="text-5xl font-black tracking-wide"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subtitle */}
              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
          text-gray-400
          mt-3
          text-sm
          tracking-[0.25em]
          uppercase
        "
              >
                {!isArabic ? "Enter The Gaming World" : "ادخل لعالم الألعاب"}
              </motion.p>

              {/* Loader */}
              <div className="mt-10 flex flex-col items-center gap-5">
                {/* Spinner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
            w-14 h-14
            rounded-full
            border-[3px]
            border-neutral-700
            border-t-white
          "
                />

                {/* Loading text */}
                <motion.h2
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="
            text-white
            text-lg
            font-semibold
            tracking-[0.4em]
          "
                >
                  {!isArabic ? "LOADING" : "جاري التحميل"}
                </motion.h2>

                {/* Bars */}
                <div className="flex items-end gap-1 h-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [8, 28, 8],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.12,
                      }}
                      className="
                w-1.5
                rounded-full
                bg-gradient-to-t
                from-purple-500
                to-pink-400
              "
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {openRanks && (
          <motion.div
            initial={{ opacity: isMobile ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: isMobile ? 1 : 0 }}
            className="
        fixed inset-0 z-[300]
        bg-black/80
        flex items-center justify-center
        p-3 md:p-6
      "
            onClick={() => setOpenRanks(false)}
          >
            <motion.div
              initial={{ scale: isMobile ? 1 : 0.9, opacity: isMobile ? 1 : 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: isMobile ? 1 : 0.9, opacity: 0 }}
              transition={{ duration: isMobile ? 0 : 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="
          w-full max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          border border-white/10
          bg-[#111111]
          md:shadow-2xl
        "
            >
              {/* HEADER */}
              <div
                className="
            sticky top-0 z-10
            flex items-center justify-between
            px-5 py-4
            border-b border-white/10
            bg-[#111111]
          "
              >
                <div>
                  <h2 className="text-white text-xl md:text-2xl font-black">
                    {isArabic ? "نظام التصنيفات" : "Rank System"}
                  </h2>

                  <p
                    dir={isArabic ? "rtl" : "ltr"}
                    className="text-gray-400 text-sm"
                  >
                    {isArabic
                      ? "شق طريقك عبر التصنيفات وكن أسطورة"
                      : "Progress through ranks and become a legend"}
                  </p>
                </div>

                <button
                  onClick={() => setOpenRanks(false)}
                  className="
              w-10 h-10 rounded-xl
              bg-white/5 hover:bg-white/10
              text-white text-xl
              transition
            "
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div
                className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            p-4 md:p-6
          "
              >
                {ranks.map((rank, i) => {
                  const isCurrent =
                    getRankByPoints(points).name.en === rank.name.en;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className={`
                  relative overflow-hidden
                  rounded-3xl
                  border
                  p-4
                  transition-all duration-300

                  ${
                    isCurrent && isLogin
                      ? `
                        border-purple-500/50
                        bg-gradient-to-br
                        from-purple-500/10
                        to-pink-500/10
                        shadow-[0_0_30px_rgba(168,85,247,0.2)]
                      `
                      : `
                        border-white/10
                        bg-white/[0.03]
                        hover:border-purple-500/30
                      `
                  }
                `}
                    >
                      {/* CURRENT RANK BADGE */}
                      {isCurrent && isLogin && (
                        <div
                          className="
                      absolute top-3 right-3 z-1
                      px-3 py-1
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      text-white
                      text-[10px] md:text-xs
                      font-black
                      tracking-wide
                      shadow-lg
                    "
                        >
                          {isArabic ? "انت هنا" : "YOU HERE"}
                        </div>
                      )}

                      {/* GLOW */}
                      <div
                        className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-purple-500/5
                    to-pink-500/5
                    pointer-events-none
                  "
                      />

                      {/* IMAGE */}
                      <div className="relative flex justify-center mb-4">
                        <motion.div
                          animate={
                            isCurrent && isLogin
                              ? {
                                  y: [0, -4, 0],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="
                      relative
                      w-20 h-20 md:w-24 md:h-24
                      rounded-full
                    "
                        >
                          {/* GLOW */}
                          {isCurrent && isLogin && (
                            <div
                              className="
                          absolute inset-0
                          rounded-full
                          bg-purple-500/30
                          blur-xl
                          scale-110
                        "
                            />
                          )}

                          <div
                            className="
                        relative
                        w-full h-full
                        rounded-full
                        bg-black
                        border border-white/10
                        overflow-hidden
                      "
                          >
                            <Image
                              src={rank.name.path}
                              alt={rank.name.en}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* TEXT */}
                      <div className="relative text-center">
                        <h3
                          className={`
                      font-black text-lg
                      ${isCurrent && isLogin ? "text-white" : "text-gray-200"}
                    `}
                        >
                          {rank.name.en}
                        </h3>

                        <p
                          className={`
                      text-sm font-bold
                      ${isCurrent && isLogin ? "text-pink-300" : "text-purple-300"}
                    `}
                        >
                          {rank.name.ar}
                        </p>

                        {/* POINTS */}
                        <div
                          className="
                      mt-4
                      rounded-2xl
                      bg-black/40
                      border border-white/5
                      py-2 px-3
                    "
                        >
                          <p className="text-gray-400 text-xs">
                            {isArabic ? "النقاط المطلوبة" : "Required Points"}
                          </p>

                          <p className="text-green-400 font-bold mt-1">
                            {rank.min.toLocaleString()} -{" "}
                            {rank.max.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

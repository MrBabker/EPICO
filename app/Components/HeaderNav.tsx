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
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { map } from "framer-motion/client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
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

export default function HeaderNav() {
    const isMobile = useIsMobile();
  const isLogin = useSelector((state: RootState) => state.counter.islogin);
  const dispatch = useDispatch();

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* HEADER */}
      <header
        className={`z-20 flex items-center justify-between p-4 sm:p-6 border-b border-purple-500/20 backdrop-blur-md ${
          menuOpen ? "relative" : "relative"
        }`}
      >
        {" "}
        {/* LOGO */}
        <Link href={"/"}>
          <div className="flex items-center gap-2 text-xl font-bold  select-none">
            <Gamepad2 className=" text-white" />
            <div className=" flex flex-row gap-2">
              <span className="  font-extrabold text-[#9d64ff]">E</span>
              <span className="font-extrabold text-[#f458ff]">P</span>
              <span className="font-extrabold text-[#ff3f3f]">I</span>
              <span className="font-extrabold text-[#ffcb0f]">C</span>
              <span className="font-extrabold text-[#16ffa2]">O</span>
            </div>
            <div className=" hidden md:flex flex-row items-center  text-purple-400">
              <SwordsIcon /> Game World
            </div>
          </div>
        </Link>
        {/* DESKTOP NAV */}
        <div className="flex items-center gap-8 ">
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
                    Login
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
                    Hello Mohmammmed
                  </h1>
                </div>
              )}
            </motion.div>
          </div>

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
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className="
  fixed top-0 right-0
  h-screen w-[320px]
  bg-[#231a39]
  border-l border-purple-500/20
  md:backdrop-blur-xl
  z-[1000]
  md:
  flex flex-col 
 
"
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
      backdrop-blur-xl
    "
            >
              {/* AVATAR */}
              <div
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
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/vercel.svg"
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
                  EPICO
                </h2>

                <p className="text-sm text-gray-400">epicogamer@gmail.com</p>

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
                    LVL 99
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
                    PRO PLAYER
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
      md:backdrop-blur-xl 
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
                  No account
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
                  Sign In
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
          <div className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
            <Link
              className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
              href="/"
            >
              Home
              <HomeIcon />
            </Link>
          </div>
          <div className="text-white text-right hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]  hover:bg-[#05006578] hover:text-purple-300 transition ">
            <Link
              className=" flex flex-row-reverse justify-between justify-items-center p-4 w-full"
              href="/pages/about"
            >
              About
              <Info />
            </Link>
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

          {isLogin && (
            <div className=" p-5 w-full">
              <motion.button
                whileTap={{ scale: 0.92 }}
                className="
              w-full
        mt-4
        px-5 py-3
        bg-purple-600
        text-white
        font-bold
        rounded-full
      "
              >
                Log out
              </motion.button>
            </div>
          )}
        </div>
        <div className="p-[0.2px] bg-purple-500/30"></div>
      </motion.div>
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
  md:backdrop-blur-xs
  z-100
  
"
        />
      )}
    </div>
  );
}

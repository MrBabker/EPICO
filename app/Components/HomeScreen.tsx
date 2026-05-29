"use client";

import {
  Trophy,
  Star,
  LoaderCircle,
  Flame,
  Gamepad2,
  StarIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { RootState } from "../store";
import { getRankByPoints, Player } from "../utils";

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

export default function HomeScreen() {
  const isLogin = useSelector((state: RootState) => state.counter.islogin);

  const isArabic = useSelector((state: RootState) => state.counter.isArabic);

  const name = useSelector((state: RootState) => state.counter.Name);

  const isMobile = useIsMobile();

  const [players, setPlayers] = useState<Player[]>([]);
  const [loadingmess, setLoadingmess] = useState<string>("");

  // ✨ particles optimized
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

  useEffect(() => {
    const GetTopPlayers = async () => {
      setLoadingmess(
        isArabic ? "تحميل بيانات اللاعبين..." : "Loading Players...",
      );

      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_HOST + "/api/Player/top",
        );

        if (!res.ok) {
          throw new Error(isArabic ? "فشل تحميل البيانات" : "Failed to fetch");
        }

        const data = await res.json();

        setPlayers(data);

        setLoadingmess("");
      } catch (error) {
        console.log(error);

        setLoadingmess(isArabic ? "حدث خطأ ما!" : "Something went wrong!");
      }
    };

    GetTopPlayers();
  }, [isArabic]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white pt-16">
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.22),transparent_60%)]" />

      {/* ✨ Floating Particles */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        {!isMobile &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [0, p.vx * 200, 0],
                y: [0, p.vy * 200, 0],
                opacity: [0.15, 0.5, 0.15],
                scale: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <StarIcon className="fill-[#be56ffa9] text-[#be56ffa9]" />
            </motion.div>
          ))}
      </div>

      {isMobile && (
        <div className="fixed inset-0 pointer-events-none particles" />
      )}

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative px-4 md:px-8 lg:px-12 py-10 md:py-20">
          <div
            className="
              max-w-7xl
              mx-auto
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
            "
          >
            {/* LEFT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* LOGO */}
              <div className="relative flex flex-col items-center lg:items-start mb-8">
                {/* EPICO */}
                <div className="flex gap-1 mt-6">
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
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        font-black
                        tracking-wide
                      "
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
              {/* RIGHT IMAGE */}
              {isMobile && (
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    {/* glow */}
                    <div
                      className="
                    absolute
                    inset-0
                    rounded-full
                    bg-purple-500/30
                    blur-lg
                    scale-110
                  "
                    />

                    <Image
                      src="/myFace/happy.gif"
                      width={320}
                      height={320}
                      alt="Gaming Avatar"
                      priority
                      className="
                    relative
                    z-10
                    w-52
                    h-52
                    sm:w-64
                    sm:h-64
                    lg:w-80
                    lg:h-80
                    rounded-full
                    object-cover
                    border
                    border-purple-500/30
                    ssshadow-2xl
                    select-none
                  "
                    />
                  </motion.div>
                </div>
              )}
              {/* TITLE */}
              <motion.div
                animate={{
                  opacity: [0, 1],
                  y: [20, 0],
                }}
                transition={{ duration: 0.7 }}
                className={`
  text-4xl
  sm:text-5xl
  lg:text-6xl
  leading-tight
  font-bold
  text-purple-400

  inline-block
  md:block

  px-4
  py-4

  md:p-0

  w-full
  md:w-auto

  rounded-3xl
  md:rounded-none

`}
              >
                {isLogin ? (
                  <>
                    {isArabic ? "مـرحـبـا بـك فـي عـالـم" : "WELCOME TO"}

                    <br />

                    <span className="text-white">EPICO {name}</span>
                  </>
                ) : isArabic ? (
                  "كـن واحـدا مـن عـالـم EPICO"
                ) : (
                  "BE ONE OF EPICO WORLD"
                )}
              </motion.div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  text-gray-400
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-2xl
                "
              >
                {isLogin
                  ? isArabic
                    ? "واصل كسب الخبرة وارتقِ في عالمي الخاص بالألعاب."
                    : "Keep earning XP and rise in my gaming universe."
                  : isArabic
                    ? "تنافس، اكسب الخبرة، واصعد بين الرتب في عالم الألعاب."
                    : "Compete, earn XP, and rise in my gaming universe."}
              </p>

              {/* BUTTON */}
              {!isLogin && (
                <motion.div
                  className="mt-8"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Link href="/pages/logorreg">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 30px rgba(168,85,247,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        px-12
                        py-6
                        rounded-[25px]
                        bg-gradient-to-r
                        from-purple-600
                        to-pink-600
                        text-white
                        font-bold
                        text-lg
                        cursor-pointer
                      "
                    >
                      {isArabic ? "ابدأ الآن" : "Get Started"}

                      <Flame size={24} />
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* RIGHT IMAGE */}
            {!isMobile && (
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* glow */}
                  <div
                    className="
                    absolute
                    inset-0
                    rounded-full
                    bg-purple-500/30
                    blur-3xl
                    scale-110
                  "
                  />

                  <Image
                    src="/myFace/happy.gif"
                    width={320}
                    height={320}
                    alt="Gaming Avatar"
                    priority
                    className="
                    relative
                    z-10
                    w-52
                    h-52
                    sm:w-64
                    sm:h-64
                    lg:w-80
                    lg:h-80
                    rounded-full
                    object-cover
                    border
                    border-purple-500/30
                    shadow-2xl
                    select-none
                  "
                  />
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* LEADERBOARD */}
        <section className="w-full px-4 md:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-2xl
                  bg-white/[0.05]
                  border
                  border-white/10
                  ssbackdrop-blur-md
                "
              >
                <Trophy className="text-yellow-400" />

                <span className="text-xl md:text-2xl font-bold text-yellow-400">
                  {isArabic ? "أقـوى 10 لاعـبـيـن" : "Top 10 Players"}
                </span>
              </div>
            </div>

            {/* Loading */}
            {loadingmess.trim().length > 0 && (
              <div className="flex justify-center mb-8">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    bg-zinc-900/80
                    border
                    border-zinc-700
                    px-8
                    py-5
                    rounded-3xl
                    ssshadow-2xl
                    ssbackdrop-blur-md
                  "
                >
                  <LoaderCircle className="w-8 h-8 text-green-400 animate-spin" />

                  <p className="text-white text-lg font-semibold tracking-wide">
                    {loadingmess}
                  </p>
                </div>
              </div>
            )}

            {/* Players */}
            <div className="grid gap-4">
              {players.map((p, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1],
                    y: [15, 0],
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >
                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      transition-all
                      duration-300
                      hover:scale-[1.015]

                      ${
                        p.name === name && isLogin
                          ? `
                            border-purple-500/60
                            bg-gradient-to-r
                            from-purple-500/10
                            to-pink-500/10
                            shadow-[0_0_30px_rgba(168,85,247,0.18)]
                          `
                          : `
                            border-white/10
                            bg-white/[0.04]
                            hover:border-white/20
                          `
                      }
                    `}
                  >
                    {/* Current Player Glow */}
                    {p.name === name && isLogin && (
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-purple-500/5
                          to-pink-500/5
                          pointer-events-none
                        "
                      />
                    )}

                    <div className="relative flex items-center justify-between p-4 md:p-5">
                      {/* LEFT */}
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Rank */}
                        <div
                          className={`
                            flex
                            items-center
                            justify-center
                            w-10 h-10
                            rounded-2xl
                            font-bold

                            ${
                              i < 3
                                ? "bg-yellow-400/15 text-yellow-300"
                                : "bg-white/5 text-gray-300"
                            }
                          `}
                        >
                          #{i + 1}
                        </div>

                        {/* Player */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <Image
                              src={getRankByPoints(p.points).name.path}
                              alt={getRankByPoints(p.points).name.en}
                              width={36}
                              height={36}
                              className="select-none"
                            />

                            <p
                              className={`
                                truncate
                                font-bold
                                text-base
                                md:text-lg

                                ${
                                  p.name === name && isLogin
                                    ? "text-white"
                                    : "text-gray-200"
                                }
                              `}
                            >
                              {p.name}
                            </p>
                          </div>

                          {p.name === name && isLogin && (
                            <span className="text-xs text-purple-300 font-medium">
                              YOU
                            </span>
                          )}
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex items-center gap-2 shrink-0">
                        <Star size={18} className="text-green-400" />

                        <span className="font-bold text-green-400 text-lg">
                          {p.points}
                        </span>

                        <span className="hidden sm:inline text-green-300/70 text-sm">
                          EP
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="
            mt-10
            py-8
            text-sm
            text-gray-500
            flex
            items-center
            justify-center
            gap-2
          "
        >
          {isArabic
            ? "صُمم خصيصًا لعالمي الخاص بالألعاب"
            : "Built for my gaming universe"}

          <Gamepad2 size={18} />
        </footer>
      </div>
    </div>
  );
}

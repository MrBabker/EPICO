"use client";

import { Trophy, Star, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Player } from "../utils";

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
  const isMobile = useIsMobile();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loadingmess, setLoadingmess] = useState<string>("");

  // ⚡ particles optimized
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 25;

    return Array.from({ length: count }).map((_, i) => ({
      x: (i * 37) % 100,
      y: (i * 71) % 100,
      vx: (i % 2 === 0 ? 1 : -1) * (0.05 + (i % 5) * 0.02),
      vy: (i % 3 === 0 ? 1 : -1) * (0.04 + (i % 4) * 0.02),
      size: isMobile ? 5 : 10 + (i % 3),
    }));
  }, [isMobile]);

  useEffect(() => {
    const GetTopPlayers = async () => {
      setLoadingmess("Loading Players...");
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_HOST + "/api/Player/top",
        );

        if (!res.ok) {
          setLoadingmess("Failed to fetch !");
          throw new Error("Failed to fetch");
        }

        setLoadingmess("");
        const data = await res.json();

        setPlayers(data);
      } catch (error) {
        console.log(error);
        setLoadingmess("Something went wrong !!");
      }
    };
    GetTopPlayers();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* 🌈 Background */}
      {/*isMobile && (
        <Image
          src="/img/partt.gif"
          fill
          alt="Gaming Avatar"
          priority
          className="object-cover select-none  scalse-[10] scale-x-[1.2] opacity-20"
        />
      )*/}
      {
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.25),transparent_60%)]" />
      }
      {/* ✨ Particles */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        {true &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-400 rounded-full  md:blur-sm"
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
                      scale: [1, 1.6, 1],
                    }
                  : {
                      x: [0, p.vx * 200, 0],
                      y: [0, p.vy * 200, 0],
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.6, 1],
                    }
              }
              transition={{
                duration: isMobile ? 4 : 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      <div className="relative z-10">
        <HeaderNav />

        {/* HERO */}
        <section className="py-16 text-center px-4">
          {/* 🎮 IMAGE */}
          <div className="flex justify-center mb-10 h-60 items-center">
            <motion.div
              animate={isMobile ? { y: [0, -12, 0] } : { y: [0, -12, 0] }}
              transition={
                isMobile
                  ? { duration: 2, repeat: Infinity }
                  : { duration: 2, repeat: Infinity }
              }
            >
              <Image
                src={`/myFace/happy.gif`}
                width={100}
                height={100}
                alt="Gaming Avatar"
                className="w-60  md:w-60 h-60 md:h-60 rounded-full object-cover select-none"
                priority
              />
            </motion.div>
          </div>

          {/* TITLE */}
          <motion.h1
            animate={{
              opacity: [0, 0, 1],
              y: isMobile ? 0 : [10, 0],
            }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-widest text-purple-400"
          >
            {isLogin ? (
              <span>
                WELCOME TO THE EPICO WORLD{" "}
                <span className="text-white">Mohammed</span>
              </span>
            ) : (
              "BE ONE OF THE EPICO WORLD"
            )}
          </motion.h1>

          <p className="mt-4 text-gray-400">
            {isLogin
              ? "Keep earning XP and rise in my gaming universe."
              : "Compete, earn XP, and rise in my gaming universe."}
          </p>

          {!isLogin && (
            <div className=" p-5">
              <motion.div
                animate={{
                  y: [0, -4, 0], // 🎯 bounce هنا
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <Link href="/pages/logorreg">
                  {" "}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0px 0px 20px rgba(168,85,247,0.7)",
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="cursor-pointer px-10 py-5 bg-purple-600 text-white text-2xl font-bold  rounded-full"
                  >
                    <p className=" select-none  "> Get Started</p>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          )}
        </section>

        {/* LEADERBOARD */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-2 mb-6 text-2xl font-bold text-yellow-400 justify-center">
              <Trophy />
              Top 10 Players
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
            <div className="grid gap-3 mx-5">
              {players.map((p, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 0, 1], y: [-10, -10, 0] }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="bg-white/5 border border-purple-500/50 md:backdrop-blur-md hover:scale-[1.03] transition rounded-3xl">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-yellow-400">
                          #{i + 1}
                        </span>
                        <span className="font-bold text-white">{p.name}</span>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-green-400">
                        <Star size={16} />
                        {p.points} EP
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-sm text-center text-gray-500">
          Built for my gaming universe ⚡
        </footer>
      </div>
    </div>
  );
}

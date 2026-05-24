"use client";

import { Gamepad2, Trophy, Star, Info, Contact } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { map } from "framer-motion/client";
import HeaderNav from "./HeaderNav";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// 🎮 صور السلايد
const gamingImages = [
  "/closehappy.png",
  "/happy.png",
  "/oooo.png",
  "/openhappy.png",
];

export default function HomeScreen() {
  const isLogin = useSelector((state: RootState) => state.counter.islogin);

  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      x: (i * 37) % 100,
      y: (i * 71) % 100,

      vx: (i % 2 === 0 ? 1 : -1) * (0.05 + (i % 5) * 0.02),
      vy: (i % 3 === 0 ? 1 : -1) * (0.04 + (i % 4) * 0.02),

      size: 10 + (i % 3),
    }));
  }, []);
  // 🎮 تغيير الصور تلقائيًا
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gamingImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const players = [
    { name: "PlayerOne", xp: 9850 },
    { name: "ShadowX", xp: 9200 },
    { name: "NeoGamer", xp: 8900 },
    { name: "DarkSoul", xp: 8600 },
    { name: "PixelKing", xp: 8200 },
    { name: "CyberPro", xp: 7900 },
    { name: "AlphaWolf", xp: 7600 },
    { name: "ZeroLag", xp: 7300 },
    { name: "StormByte", xp: 7000 },
    { name: "NightHawk", xp: 6800 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.25),transparent_60%)]" />

      {/* ✨ Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full blur-sm"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              x: [0, p.vx * 200, 0],
              y: [0, p.vy * 200, 0],
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <HeaderNav />
        {/* HERO */}
        <section className="py-16 text-center px-4">
          {/* 🎮 IMAGE SLIDER */}
          <div className="flex justify-center mb-10 h-60 items-center ">
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                key={index}
                src={
                  gamingImages?.length
                    ? `/myFace${gamingImages[index]}`
                    : "/myFace/happy.png"
                }
                width={400}
                height={400}
                alt="Gaming Avatar"
                className="backdrop-blur-md w-40 md:w-60 h-40 md:h-60 rounded-full object-cover select-none"
                priority
              />
            </motion.div>
          </div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 1, y: -5 }}
            animate={{ opacity: 1, y: [10, 0] }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-widest text-purple-400"
          >
           {
            isLogin ?(<span>WELCOM TO THE EPICO WORLD <span className=" text-white">Mohammed</span></span>):(<>BE ONE OF THE EPICO WORLD</>)
           }
          </motion.h1>

          {!isLogin ? (
            <p className="mt-4 text-gray-400">
              Compete, earn XP, and rise in my gaming universe.
            </p>
          ) : (
            <p className="mt-4 text-gray-400">
              Keep earning XP, and riseing in my gaming universe .
            </p>
          )}

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
                <Link href="/pages/login">
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
            <div className=" justify-items-center w-auto">
              {" "}
              <div className="flex items-center gap-2 mb-6 text-2xl font-bold text-yellow-400">
                <Trophy />
                Top 10 Players
              </div>
            </div>

            <div className="grid gap-3 mx-5">
              {players.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: [20, 0] }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="bg-white/5 border border-purple-500/50 backdrop-blur-md hover:scale-[1.03] transition rounded-3xl">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-yellow-400">
                          #{i + 1}
                        </span>
                        <span className="font-bold text-white">{p.name}</span>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-green-400">
                        <Star size={16} />
                        {p.xp} XP
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

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Gamepad2,
  Shield,
  Zap,
  Swords,
  ArrowBigDownDash,
  LucideSword,
  Sword,
} from "lucide-react";
import HeaderNav from "./HeaderNav";

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

export default function AboutPage() {
  const isMobile = useIsMobile();
  const cards = [
    {
      icon: Trophy,
      title: "Epic Tournaments",
      text: "Compete against top players and dominate the leaderboards.",
    },
    {
      icon: Gamepad2,
      title: "Next Level Gameplay",
      text: "Smooth mechanics and immersive combat experience.",
    },
    {
      icon: Shield,
      title: "Powerful Characters",
      text: "Unlock unique heroes, skins, and abilities.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      text: "Ultra-fast loading with responsive gameplay.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0717] text-white pt-25">
      {/* Background Glow */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-600/20 blur-3xl rounded-full" />
      )}{" "}
      {!isMobile && (
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-fuchsia-500/20 blur-3xl rounded-full" />
      )}{" "}
     {  /*<HeaderNav />*/}
      <div className="relative z-10 max-w-7xl mx-auto py-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 1, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 px-10"
        >
          <div className=" md:flex flex-row  w-full justify-items-center justify-center px-10">
            <div className=" text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent">
              <span>ABOUT</span>
            </div>
            <div>
              <Sword className="w-20 h-20 text-purple-400" />
            </div>
            <div className=" text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent">
              <span>EPICO</span>
            </div>
          </div>

          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
            Step into a futuristic world full of battles, adventures, legendary
            rewards, and competitive multiplayer action.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 30px rgba(168,85,247,0.35)",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-purple-500/20
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-300" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

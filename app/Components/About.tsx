"use client";
import React, { useEffect, useMemo, useState } from "react";
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
  Star,
  ShieldAlert,
} from "lucide-react";
import HeaderNav from "./HeaderNav";
import { RootState } from "../store";
import { useSelector } from "react-redux";

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
  const cards = [
    {
      icon: Trophy,

      title: {
        en: "Epic Tournaments",
        ar: "بطولات ملحمية",
      },

      text: {
        en: "Compete against top players and dominate the leaderboards.",
        ar: "نافس أقوى اللاعبين وسيطر على صدارة الترتيب.",
      },
    },

    {
      icon: Gamepad2,

      title: {
        en: "Next Level Gameplay",
        ar: "أسلوب لعب متطور",
      },

      text: {
        en: "Smooth mechanics and immersive combat experience.",
        ar: "ميكانيكيات سلسة وتجربة قتال غامرة.",
      },
    },

    {
      icon: Shield,

      title: {
        en: "Powerful Characters",
        ar: "شخصيات قوية",
      },

      text: {
        en: "Unlock unique heroes, skins, and abilities.",
        ar: "افتح أبطالًا، سكنات، وقدرات فريدة.",
      },
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a0019] via-[#111827] to-[#0f172a] text-white pt-25">
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
              <ShieldAlert className="fill-[#aa00ff6b] text-[#aa00ff6b]" />
            </motion.div>
          ))}
      </div>

      {isMobile && (
        <div className="fixed inset-0 pointer-events-none particles" />
      )}
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
              {!isMobile && <span>{isArabic ? "EPICO" : "ABOUT"}</span>}
              {isMobile && <span>{isArabic ? "حـول" : "ABOUT"}</span>}
            </div>
            <div>
              <Sword className="w-20 h-20 text-purple-400" />
            </div>
            <div className=" text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent">
              {!isMobile && <span>{isArabic ? "حـول" : "EPICO"}</span>}
              {isMobile && <span>{isArabic ? "EPICO" : "EPICO"}</span>}
            </div>
          </div>

          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
            {isArabic
              ? "انطلق في عالم مستقبلي مليء بالمعارك الشرسة، المغامرات الملحمية، الجوائز الأسطورية، والتنافس الجماعي القوي."
              : "Step into a futuristic world full of battles, adventures, legendary rewards, and competitive multiplayer action."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {" "}
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
                w-full
                h-70
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-purple-500/20
                  bg-white/5
                  ssbackdrop-blur-xl
                  p-7
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-300" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? card.title.ar : card.title.en}
                  </h2>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {isArabic ? card.text.ar : card.text.en}
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

import { number } from "framer-motion";

export interface Player {
    name: string;
    username: string;
    email: string;
    points: number;
    level: number;
}


export const ranks = [
  {
    name: { en: "Spark", ar: "ومضة", path: "/ranks/1.png" },
    min: 0,
    max: 999,
  },
  {
    name: { en: "Nova", ar: "وهج", path: "/ranks/2.png" },
    min: 1000,
    max: 2999,
  },
  {
    name: { en: "Pulse", ar: "نبض", path: "/ranks/3.png" },
    min: 3000,
    max: 5999,
  },
  {
    name: { en: "Prime", ar: "صفوة", path: "/ranks/4.png" },
    min: 6000,
    max: 9999,
  },
  {
    name: { en: "Vertex", ar: "قمة", path: "/ranks/5.png" },
    min: 10000,
    max: 15999,
  },
  {
    name: { en: "Ultra", ar: "طيف", path: "/ranks/6.png" },
    min: 16000,
    max: 23999,
  },
  {
    name: { en: "Zenith", ar: "ذروة", path: "/ranks/7.png" },
    min: 24000,
    max: 35999,
  },
  {
    name: { en: "Ascended", ar: "سامي", path: "/ranks/8.png" },
    min: 36000,
    max: 52999,
  },
  {
    name: { en: "Epic", ar: "ملحمي", path: "/ranks/9.png" },
    min: 53000,
    max: 74999,
  },
  {
    name: { en: "EPICO Legend", ar: "أسطورة", path: "/ranks/10.png" },
    min: 75000,
    max: 100000,
  },
];


export const getRankByPoints = (points:number) => {
  return (
    ranks.find((rank) => points >= rank.min && points <= rank.max) ||
    ranks[0]
  );
};
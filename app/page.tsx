"use ";
import Image from "next/image";
import HomeScreen from "./Components/HomeScreen";
import HeaderNav from "./Components/HeaderNav";

export default function Home() {
  return (
    <div>
      <HeaderNav />

      <HomeScreen />
    </div>
  );
}

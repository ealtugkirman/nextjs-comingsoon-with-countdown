import Image from "next/image";
import Hero from "@/components/hero";
import CountDown from "@/components/countdown";
export default function Home() {
  return (
    <main className="h-full px-2 md:px-0 w-full flex flex-col justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 to-black">
      <Hero />
      <CountDown />
    </main>
  );
}

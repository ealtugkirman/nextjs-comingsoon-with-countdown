"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "05/14/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-4">
      <div className="w-full max-w-5xl mx-auto flex items-center bg-white">
        <CountdownItem num={remaining.days} text="gün" />
        <CountdownItem num={remaining.hours} text="saat" />
        <CountdownItem num={remaining.minutes} text="dakika" />
        <CountdownItem num={remaining.seconds} text="saniye" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-slate-500">
        {text}
      </span>
    </div>
  );
};

export default CountDown;
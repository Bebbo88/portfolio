import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../utils/motion";

const stats = [
  {
    value: 9,
    suffix: "+",
    label: "Projects Completed",
    icon: "🚀",
  },
  {
    value: 12,
    suffix: "+",
    label: "Technologies Mastered",
    icon: "⚡",
  },
  {
    value: 6,
    suffix: " mo",
    label: "Professional Experience",
    icon: "💼",
  },
  {
    value: 100,
    suffix: "%",
    label: "Passion for Code",
    icon: "🔥",
  },
];

const CountUp = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ stat, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="relative group"
  >
    <div className="bg-tertiary rounded-2xl p-8 flex flex-col items-center text-center
                    border border-[#ffffff10] hover:border-[#915eff50]
                    transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.15)]
                    hover:-translate-y-1 min-w-[200px]">
      {/* Icon */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>

      {/* Counter */}
      <div className="text-[42px] font-black text-white mb-2
                      bg-gradient-to-r from-[#915eff] to-[#00cea8]
                      bg-clip-text text-transparent leading-tight">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </div>

      {/* Label */}
      <p className="text-secondary text-[14px] font-medium uppercase tracking-wider">
        {stat.label}
      </p>

      {/* Bottom accent line */}
      <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-[#915eff] to-[#00cea8]
                      group-hover:w-20 transition-all duration-300" />
    </div>
  </motion.div>
);

const Stats = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>At a glance</p>
        <h2 className={`${styles.sectionHeadText}`}>Numbers That Speak.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A snapshot of my journey so far — from projects shipped to technologies
        learned and experiences gained.
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stats, "stats");

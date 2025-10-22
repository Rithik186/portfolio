"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { SkillsChart } from "./skills-chart"; // Import your SkillsChart component
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlareHover from '../REACT-BITS/Animations/GlareHover';
import DarkVeil from '../REACT-BITS/Background/DarkVeil';

/* ------------------ Typing animation ------------------ */
function Typing({
  strings,
  speed = 60,
  backSpeed = 30,
  loop = true,
  className = "",
}: {
  strings: string[];
  speed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}) {
  const [text, setText] = useState("");
  const [si, setSi] = useState(0);
  const [pos, setPos] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[si] ?? "";
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, pos + 1));
        setPos((p) => p + 1);
        if (pos + 1 === current.length) setDeleting(true);
      } else {
        setText(current.slice(0, pos - 1));
        setPos((p) => p - 1);
        if (pos - 1 === 0) {
          setDeleting(false);
          setSi((s) => (s + 1 >= strings.length ? (loop ? 0 : s) : s + 1));
        }
      }
    }, deleting ? backSpeed : speed);
    return () => clearTimeout(timeout);
  }, [si, pos, deleting, strings, speed, backSpeed, loop]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block ml-1 w-[8px] h-[20px] align-middle animate-blink bg-current" />
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </span>
  );
}

/* ------------------ Portfolio Component ------------------ */
export default function Portfolio() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const githubRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const skillIconsRef = useRef<HTMLImageElement | null>(null);
  const skillsChartRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (el: HTMLElement | null) =>
    el?.scrollIntoView({ behavior: "smooth" });

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("rk_theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("rk_theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  const [sending, setSending] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for Skill Icons
    if (skillIconsRef.current) {
      gsap.fromTo(
        skillIconsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillIconsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animation for Skills Chart
    if (skillsChartRef.current) {
      gsap.fromTo(
        skillsChartRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsChartRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [isDark]);

  const bgAccent =
    "bg-gradient-to-r from-emerald-500 to-lime-600 hover:from-lime-600 hover:to-emerald-500";

  const PROJECTS = [
    {
      title: "AgroChain",
      description:
        "Farmer-to-Consumer platform with UPI payments, AI crop suggestions, and blockchain transparency.",
      tags: ["Blockchain", "AI", "UPI"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
    {
      title: "IoT Anti-Tampering Delivery Box",
      description:
        "Smart box with OTP Flutter app access, GSM alerts, and tamper detection sensors.",
      tags: ["Flutter", "IoT", "Arduino"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
    {
      title: "Cross-Platform File Sharing App",
      description:
        "Secure Android/iOS app with Firebase auth, real-time transfers, and notifications.",
      tags: ["Flutter", "Firebase", "Dart"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
    {
      title: "WiFi Controlled Robot Car",
      description:
        "ESP8266 + L298N robot; Flutter controller with speed control, lights, horn, OTA updates & lock.",
      tags: ["ESP8266", "Flutter", "IoT"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
    {
      title: "Elite Car Showroom Website",
      description:
        "React + Tailwind modern showcase of premium cars and specs.",
      tags: ["React", "Tailwind"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
    {
      title: "IPL Auction Game App",
      description:
        "Multiplayer auction simulator for Android & iOS with rooms, live chat, voice features, and animations.",
      tags: ["Flutter", "Realtime"],
      githubUrl: "https://github.com/Rithik186",
      demoUrl: "#",
    },
  ];

  const SKILL_ICONS_URL =
    "https://skillicons.dev/icons?i=python,java,cpp,dart,javascript,flutter,react,html,css,tailwind,nodejs,express,firebase,arduino,vscode,github,git,androidstudio";

  const skillsData = [
    { name: "React", value: 85 },
    { name: "Flutter", value: 90 },
    { name: "NodeJS", value: 70 },
    { name: "Python", value: 80 },
    { name: "Arduino", value: 95 },
    { name: "Firebase", value: 85 },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
      </div>
      <div
        className={`relative z-10 min-h-screen ${
          isDark
            ? "bg-gradient-to-b from-[#050505] via-[#0a0a0f] to-[#101018] text-neutral-100"
            : "bg-gray-100 text-gray-900"
        } transition-colors duration-500`}
      >
        {/* NAVBAR */}
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur ${isDark ? "bg-black/40 border-b border-emerald-700/30" : "bg-white/80 border-b border-gray-200"}`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <button
              onClick={() => scrollTo(aboutRef.current)}
              className={`${isDark ? "text-lg font-bold text-emerald-400 hover:text-lime-400" : "text-lg font-bold text-green-600 hover:text-lime-800"} transition`}
            >
              Rithik Kannaa K
            </button>
            <nav className={`hidden md:flex items-center gap-6 text-sm ${isDark ? "text-neutral-300" : "text-gray-700"}`}>
              {
                (
                  [
                    ["About", aboutRef],
                    ["Skills", skillsRef],
                    ["Projects", projectsRef],
                    ["GitHub", githubRef],
                    ["Contact", contactRef],
                  ] as [string, React.RefObject<HTMLElement | null>][]
                ).map(([label, ref], i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo((ref as any).current)}
                    className={`${isDark ? "hover:text-emerald-400" : "hover:text-green-600"} transition`}
                  >
                    {label}
                  </button>
                ))
              }
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`p-2 rounded-md ${isDark ? "hover:bg-emerald-700/20" : "hover:bg-green-100"} transition`}
                aria-label="toggle-theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="mailto:rithikkannaa@gmail.com"
                className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md ${bgAccent} text-white font-semibold shadow-md transition`}
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <main className="pt-24">
          <section className="min-h-[70vh] flex items-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  <Typing
                    strings={[
                      "Hello — I'm Rithik Kannaa K.",
                      "I build intelligent, secure IoT & AI systems.",
                    ]}
                    className={`${isDark ? "text-emerald-400" : "text-green-600"}`}
                  />
                </h1>
                <p className={`${isDark ? "text-neutral-400" : "text-gray-700"} max-w-xl`}>
                  Passionate about building futuristic solutions that blend AI,
                  IoT, and mobile development with cybersecurity principles.
                </p>
              </motion.div>
              {/* Quick Facts */}
              <div style={{ height: 'auto', position: 'relative' }}>
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`rounded-2xl p-6 ${isDark ? "border border-emerald-800/40 bg-black/40 backdrop-blur shadow-lg" : "border border-green-200 bg-white/80 shadow-md"}`}
                  >
                    <h3 className={`text-lg font-semibold ${isDark ? "text-emerald-400" : "text-green-600"} mb-3`}>
                      Quick Facts
                    </h3>
                    <ul className={`${isDark ? "text-neutral-400" : "text-gray-700"} space-y-3`}>
                      <li>IoT · Flutter · AI · Cybersecurity</li>
                      <li>Stack: React, Node, ESP8266, Firebase</li>
                      <li>Focus: Secure, real-world innovation</li>
                      <li>Gaming YouTuber & 3D Designer</li>
                    </ul>
                  </motion.div>
                </GlareHover>
              </div>
            </div>
          </section>

          {/* EXECUTIVE SUMMARY */}
          <section ref={aboutRef} className="py-16 px-6 max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${isDark ? "text-3xl font-semibold text-emerald-400" : "text-3xl font-semibold text-green-600"} mb-6`}
            >
              Executive Summary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${isDark ? "text-neutral-300" : "text-gray-700"} leading-relaxed`}
            >
              I'm <span className={`${isDark ? "text-emerald-400" : "text-green-600"}`}>Rithik Kannaa K</span>, a
              developer specialized in IoT, Flutter, and web development using
              React and Firebase. I love crafting intelligent systems that merge
              hardware with modern software frameworks. Currently, I’m expanding
              into AI and Cybersecurity, integrating smart, secure decision-making
              into my IoT solutions. I’m also a passionate gaming YouTuber and
              3D designer.
            </motion.p>
          </section>

          {/* SKILLS & TOOLS */}
          <section ref={skillsRef} className={`${isDark ? "bg-black/30" : "bg-gray-200"} py-16`}>
            <h2 className={`text-center text-3xl font-semibold ${isDark ? "text-emerald-400" : "text-green-600"} mb-8`}>
              Skills & Tools
            </h2>
            <div ref={skillIconsRef} className="flex justify-center mb-8">
              <img
                src={SKILL_ICONS_URL}
                alt="skills"
                className={`rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ${isDark ? "border border-emerald-800/40" : "border border-green-200"}`}
              />
            </div>

            {/* Skills Chart */}
            <div ref={skillsChartRef} className="max-w-4xl mx-auto px-4">
              <SkillsChart data={skillsData} />
            </div>
          </section>

          {/* PROJECTS */}
          <section ref={projectsRef} className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`${isDark ? "text-3xl font-semibold text-emerald-400" : "text-3xl font-semibold text-green-600"} mb-8`}
              >
                Featured Projects
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`rounded-xl p-5 ${isDark ? "bg-black/40 border border-emerald-800/30 hover:border-lime-500/40 hover:shadow-[0_0_20px_#84cc16]" : "bg-white/80 border border-green-200 hover:border-lime-500/40 hover:shadow-[0_0_20px_#65a30d]"} transition-all`}
                  >
                    <h3 className={`${isDark ? "text-lg font-semibold text-emerald-300" : "text-lg font-semibold text-green-700"} mb-2`}>
                      {p.title}
                    </h3>
                    <p className={`${isDark ? "text-neutral-400" : "text-gray-700"} mb-4`}>{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={`${isDark ? "text-xs px-2 py-1 rounded bg-emerald-900/40 text-emerald-200" : "text-xs px-2 py-1 rounded bg-green-100 text-green-700"}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-3 py-2 rounded-md ${isDark ? "border border-emerald-800 hover:border-lime-500 text-emerald-300 hover:text-lime-300" : "border border-green-300 hover:border-lime-500 text-green-700 hover:text-lime-700"} transition-all`}
                      >
                        Code
                      </a>
                      <a
                        href={p.demoUrl}
                        className={`px-3 py-2 rounded-md ${bgAccent} text-white font-semibold transition-all shadow-md`}
                      >
                        Demo
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* GITHUB STATS */}
          <section ref={githubRef} className={`${isDark ? "bg-black/30 border-t border-emerald-800/40" : "bg-gray-200 border-t border-gray-300"} py-16`}>
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className={`${isDark ? "text-3xl font-semibold text-emerald-400" : "text-3xl font-semibold text-green-600"} mb-8`}>
                GitHub Insights
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=Rithik186&show_icons=true&theme=${isDark ? "tokyonight" : "light"}&hide_border=true&count_private=true`}
                  alt="GitHub Stats"
                  className={`rounded-lg ${isDark ? "border border-emerald-800/40" : "border border-green-200"}`}
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Rithik186&layout=compact&theme=${isDark ? "tokyonight" : "light"}&hide_border=true`}
                  alt="Top Languages"
                  className={`rounded-lg ${isDark ? "border border-emerald-800/40" : "border border-green-200"}`}
                />
              </div>
              <div className="mt-8">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=Rithik186&theme=${isDark ? "tokyonight" : "light"}&hide_border=true`}
                  alt="GitHub Streak"
                  className={`rounded-lg ${isDark ? "border border-emerald-800/40" : "border border-green-200"} mx-auto`}
                />
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            ref={contactRef}
            className={`${isDark ? "bg-black/40 border-t border-emerald-800/40" : "bg-gray-100 border-t border-gray-300"} py-16`}
          >
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={`${isDark ? "text-2xl font-semibold text-emerald-400" : "text-2xl font-semibold text-green-600"} mb-4`}>
                Get in Touch
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setTimeout(() => {
                    setSending(false);
                    alert("Thanks — message received!");
                  }, 900);
                }}
                className={`${isDark ? "space-y-4 bg-black/40 p-6 rounded-md border border-emerald-800/30 backdrop-blur-md" : "space-y-4 bg-white/80 p-6 rounded-md border border-green-200 shadow-md"}`}
              >
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className={`w-full px-4 py-2 rounded-md ${isDark ? "bg-[#0a0a12] border border-emerald-700/40 text-neutral-200 focus:border-lime-500" : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500"} outline-none transition`}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className={`w-full px-4 py-2 rounded-md ${isDark ? "bg-[#0a0a12] border border-emerald-700/40 text-neutral-200 focus:border-lime-500" : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500"} outline-none transition`}
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  className={`w-full px-4 py-3 rounded-md ${isDark ? "bg-[#0a0a12] border border-emerald-700/40 text-neutral-200 focus:border-lime-500" : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500"} outline-none transition`}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className={`px-4 py-2 rounded-md font-semibold ${bgAccent} shadow-lg hover:shadow-lime-500/40 transition-all`}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className={`${isDark ? "border-t border-emerald-800/40 bg-black/40 text-neutral-500" : "border-t border-gray-300 bg-gray-200 text-gray-600"} py-6 text-center text-sm`}>
          © {new Date().getFullYear()} Rithik Kannaa K — Crafted with React, Tailwind, and Framer Motion
        </footer>
      </div>
    </div>
  );
}

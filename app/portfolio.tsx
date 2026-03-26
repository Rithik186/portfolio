"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Youtube, Zap, Trophy, Flame, Layout, ExternalLink,
  Code2, Cpu, Shield, FolderOpen, Terminal, Sparkles, Layers,
  Database, Server, Globe, Lock, Workflow, Box, Menu, X
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// REACT-BITS Imports - Premium Collection
import GlareHover from '../REACT-BITS/Animations/GlareHover';
import Magnet from '../REACT-BITS/Animations/Magnet';
import StarBorder from '../REACT-BITS/Animations/StarBorder';
import ShinyText from '../REACT-BITS/Text-animations/ShinyText';
import AnimatedContent from '../REACT-BITS/Animations/AnimatedContent';
import FadeContent from '../REACT-BITS/Animations/FadeContent';
import BlobCursor from '../REACT-BITS/Animations/BlobCursor';
import BlurText from '../REACT-BITS/Text-animations/BlurText';
import TrueFocus from '../REACT-BITS/Text-animations/TrueFocus';
import ClickSpark from '../REACT-BITS/Animations/ClickSpark';
import DecryptedText from '../REACT-BITS/Text-animations/DecryptedText';
import ScrollStack, { ScrollStackItem } from '../REACT-BITS/Components/ScrollStack';

// NEW IMPORTS
import PillNav from '../REACT-BITS/Components/PillNav';
import MagicBento from '../REACT-BITS/Components/MagicBento';
import CircularGallery from '../REACT-BITS/Components/CircularGallery';
import LogoLoop from '../REACT-BITS/Animations/LogoLoop';
import InfiniteMenu from '../REACT-BITS/Components/InfiniteMenu';
import DarkVeil from '../REACT-BITS/Background/DarkVeil';
import ScrollReveal from '../REACT-BITS/Text-animations/ScrollReveal';
import RotatingText from '../REACT-BITS/Text-animations/RotatingText';
import GlitchText from '../REACT-BITS/Text-animations/GlitchText';
import FlowingMenu from '../REACT-BITS/Components/FlowingMenu';
import SpotlightCard from '../REACT-BITS/Components/SpotlightCard';

/* ------------------ CONFIG ------------------ */
const CONFIG = {
  EMAIL: "rithikkannaa@gmail.com",
  GITHUB: "https://github.com/Rithik186",
  LINKEDIN: "https://www.linkedin.com/in/rithikkannaa-k",
  YOUTUBE: "https://www.youtube.com/@rkgamingyt5935",
};

/* ------------------ DATA ------------------ */
const PROJECTS = [
  {
    title: "Bid Bash League",
    subtitle: "Realtime IPL Auction Engine",
    description: "High-performance auction simulation with WebSocket-based bidding, dynamic player sets, and live synchronized rooms.",
    tags: ["React", "Firebase", "Realtime DB", "GSAP"],
    accent: "#6366f1", // Indigo
    icon: Gavel,
    github: "https://github.com/Rithik186/IPL-AUCTION-GAME",
    demo: "https://bidbash.netlify.app/",
    featured: true
  },
  {
    title: "AgroChain",
    subtitle: "Smart Agriculture Ecosystem",
    description: "Blockchain-backed marketplace connecting farmers directly to consumers, powered by AI crop disease detection.",
    tags: ["Blockchain", "AI/ML", "Flutter", "Solidity"],
    accent: "#10b981", // Emerald
    icon: Leaf,
    github: "https://github.com/Rithik186/F2c_final",
    demo: "https://farmer2consumer.netlify.app/",
    featured: true
  },
  {
    title: "SecureBox IoT",
    subtitle: "Anti-Tamper Delivery System",
    description: "Hardware-software solution featuring biometric locking, GSM tracking, and real-time tamper alerts.",
    tags: ["IoT", "Embedded C++", "Flutter", "GSM"],
    accent: "#f59e0b", // Amber
    icon: Lock,
    github: null,
    demo: null,
    featured: false
  },
  {
    title: "Elite Showroom",
    subtitle: "3D Interactive Experience",
    description: "WebGL-powered car configurator with cinematic lighting and physics-based interactions.",
    tags: ["Three.js", "React Three Fiber", "WebGL"],
    accent: "#ec4899", // Pink
    icon: Car,
    github: "https://github.com/Rithik186/ELITE",
    demo: "https://elite-car-showroom.vercel.app/",
    featured: false
  }
];

// Helper Icons
function Gavel(props: any) { return <Zap {...props} /> }
function Leaf(props: any) { return <Globe {...props} /> }
function Car(props: any) { return <Box {...props} /> }

// Skill Gallery Items (for CircularGallery)
const GALLERY_ITEMS = [
  { image: `https://cdn.simpleicons.org/react/white`, text: 'React' },
  { image: `https://cdn.simpleicons.org/nextdotjs/white`, text: 'Next.js' },
  { image: `https://cdn.simpleicons.org/typescript/white`, text: 'TypeScript' },
  { image: `https://cdn.simpleicons.org/nodedotjs/white`, text: 'Node.js' },
  { image: `https://cdn.simpleicons.org/threedotjs/white`, text: 'Three.js' },
  { image: `https://cdn.simpleicons.org/amazonaws/white`, text: 'AWS' },
  { image: `https://cdn.simpleicons.org/docker/white`, text: 'Docker' },
  { image: `https://cdn.simpleicons.org/firebase/white`, text: 'Firebase' },
  { image: `https://cdn.simpleicons.org/flutter/white`, text: 'Flutter' },
  { image: `https://cdn.simpleicons.org/python/white`, text: 'Python' }
];

// Infinite Menu Items (Achievements / Tech Stack)
const MENU_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=600&fit=crop&sat=-100',
    link: '#',
    title: 'Software Developer',
    description: 'Passionate about building ideas into real and impactful solutions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=600&fit=crop&sat=-100',
    link: '#',
    title: 'Hackathon Finalist',
    description: 'Finalist in national-level hackathons with strong teamwork and problem-solving skills.'
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=600&fit=crop&sat=-100',
    link: '#',
    title: 'Vibe Coding',
    description: 'Love experimenting, building, and coding with creativity and flow.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&h=600&fit=crop&sat=-100',
    link: '#',
    title: 'Gaming & Content',
    description: 'Enjoy gaming, storytelling, and creating engaging digital content.'
  },
  {
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&h=600&fit=crop&sat=-100',
    link: '#',
    title: 'Creative Mind',
    description: 'Into drawing, music, and visual design for inspiration and balance.'
  }
];


export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Use 1024 for navigation breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', key: 'hero' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Work', href: '#work', key: 'work' },
    { label: 'Tech', href: '#tech', key: 'tech' },
    { label: 'Contact', href: '#contact', key: 'contact' },
  ];

  // Section Refs
  const sections: { [key: string]: React.RefObject<HTMLElement | null> } = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    work: useRef<HTMLElement>(null),
    tech: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useLayoutEffect(() => {
    setMounted(true);
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Simple Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset better for highlighting
      for (const key in sections) {
        const element = sections[key].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${key}`);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <ClickSpark sparkColor="#6366f1" sparkCount={8} sparkRadius={20}>
      <div ref={scrollRef} className="relative w-full min-h-screen bg-[#030303] text-[#eef2f6] selection:bg-[#6366f1]/30 selection:text-[#6366f1] overflow-x-hidden font-sans">

        {/* --- DYNAMIC BACKGROUND: DARK VEIL --- */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
          <DarkVeil />
        </div>

        {/* --- DESKTOP NAVIGATION: PILL NAV --- */}
        {!isMobile && (
          <div className="fixed top-6 left-0 w-full z-100 flex justify-center pointer-events-none">
            <div className="pointer-events-auto transform scale-110">
              <PillNav
                logo="https://github.com/Rithik186.png"
                logoAlt="Rithik"
                items={navItems}
                onMobileMenuClick={() => { }}
                pillColor="#ffffff"
                baseColor="#000000"
                hoveredPillTextColor="#6366f1"
                pillTextColor="#000000"
                activeHref={activeSection}
              />
            </div>
          </div>
        )}

        {/* --- MOBILE NAVIGATION: BURGER MENU --- */}
        {isMobile && (
          <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center pointer-events-none">
              <div className="pointer-events-auto">
                <a href="#hero" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6366f1]/50 group-hover:border-[#6366f1] transition-all">
                    <img src="https://github.com/Rithik186.png" alt="Rithik" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xl font-black tracking-tighter text-white">RK.</span>
                </a>
              </div>

              <div className="pointer-events-auto">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </nav>

            {/* Sliding Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center justify-center h-full gap-10">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black tracking-tighter text-white hover:text-[#6366f1] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-6 mt-10">
                  {[
                    { icon: Github, href: CONFIG.GITHUB },
                    { icon: Linkedin, href: CONFIG.LINKEDIN },
                    { icon: Youtube, href: CONFIG.YOUTUBE }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 text-white">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* --- HERO SECTION --- */}
        <section id="hero" ref={sections.hero} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <div className="text-center space-y-8 relative z-10 max-w-6xl">
            <div className="relative w-full mb-8">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                rotationStrength={10}
                containerClassName="inline-block"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white text-center">
                  RITHIK KANNAA
                </h1>
              </ScrollReveal>
            </div>

            <FadeContent delay={800} blur={true}>
              <p className="text-xl md:text-2xl font-light text-white/60 tracking-wide max-w-2xl mx-auto">
                Full Stack Developer | Architecting Scalable Web & App Experiences
              </p>

              <div className="flex items-center gap-6 mt-8">
                {[
                  { icon: Github, href: CONFIG.GITHUB },
                  { icon: Linkedin, href: CONFIG.LINKEDIN },
                  { icon: Youtube, href: CONFIG.YOUTUBE },
                  { icon: Mail, href: `mailto:${CONFIG.EMAIL}` }
                ].map((social, i) => (
                  <Magnet key={i} magnetStrength={3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 group"
                    >
                      <social.icon size={32} className="text-white/60 group-hover:text-white transition-colors" />
                    </a>
                  </Magnet>
                ))}
              </div>
            </FadeContent>
          </div>
        </section>

        {/* --- ABOUT & ACHIEVEMENTS (Infinite Menu) --- */}
        <section id="about" ref={sections.about} className="py-20 relative min-h-screen flex flex-col">
          <div className="container mx-auto px-6 mb-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-center">
              <ShinyText text="WHO AM I" speed={3} />
            </h2>

            {/* Catchy Guide Text */}
            <div className="flex justify-center mb-2 relative z-50">
              <div className="flex items-center gap-4 px-8 py-4 rounded-[2rem] bg-[#0a0a0a] border-2 border-[#6366f1]/80 shadow-[0_0_40px_rgba(99,102,241,0.4)] backdrop-blur-xl animate-bounce">
                <span className="flex h-4 w-4 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#6366f1]"></span>
                </span>
                <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-[#6366f1] drop-shadow-md">
                  Hold Left Click & Move Mouse To Explore
                </span>
              </div>
            </div>
          </div>
          {/* Infinite Menu for Achievements & Identity */}
          <div className="flex-1 w-full h-[400px] md:h-[600px] relative mb-10">
            <InfiniteMenu items={MENU_ITEMS as any} scale={isMobile ? 0.6 : 0.8} />
          </div>



          {/* About Me Paragraph with ScrollReveal */}
        </section>


        {/* --- TECH STACK (Circular Gallery) --- */}
        <section id="tech" ref={sections.tech} className="py-32 bg-white/[0.02] overflow-hidden">
          <div className="container mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <ShinyText text="ARSENAL" speed={3} />
            </h2>
          </div>

          <div className="w-full relative border-y border-white/5 py-8">
            <LogoLoop
              logos={GALLERY_ITEMS.map((item) => ({
                src: item.image,
                alt: item.text,
                title: item.text
              }))}
              logoHeight={isMobile ? 60 : 100}
              gap={isMobile ? 40 : 80}
            />
          </div>
        </section>

        {/* --- PROJECTS (Scroll Stack) --- */}
        <section id="work" ref={sections.work} className="py-20">
          <div className="container mx-auto px-6 mb-10">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-4 text-center">
              SELECTED <span className="text-gradient-primary">WORKS.</span>
            </h2>
          </div>

          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <SpotlightCard key={index} className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#620093]/20 hover:border-[#620093]/60 hover:shadow-[0_0_15px_rgba(98,0,147,0.3)] hover:scale-[1.02] transition-all duration-300 h-full min-h-[300px] flex flex-col p-6 group shadow-lg">
                  {/* Top Icon & Links */}
                  <div className="flex justify-between items-start mb-6 z-10">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                      <project.icon size={28} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-end gap-4">
                    <h3 className="text-3xl font-bold text-white leading-none">{project.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">{project.subtitle}</p>
                    <p className="text-white/60 leading-relaxed text-sm">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-white/50 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- CODING PROFILE STATS --- */}
        <section className="py-20 relative bg-[#050505] overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-center text-white/90">
              <ShinyText text="CODING STATUS" speed={3} />
            </h2>
            <div className="flex flex-col gap-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* GitHub Stats Card */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative group hover:border-[#6366f1]/30 transition-all duration-500 flex flex-col gap-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-4">
                      <Github size={32} className="text-white" />
                      <h3 className="text-2xl font-bold text-white">GitHub Stats</h3>
                    </div>
                    <a href="https://github.com/Rithik186" target="_blank" className="text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors flex items-center gap-1">
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#111] rounded-2xl p-4 border border-white/5">
                      <img
                        src="https://github-readme-stats-eight-theta.vercel.app/api?username=Rithik186&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&rank_icon=github&count_private=true"
                        alt="GitHub Stats"
                        className="w-full"
                      />
                    </div>
                    <div className="bg-[#111] rounded-2xl p-4 border border-white/5 flex items-center justify-center">
                      <img
                        src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Rithik186&layout=compact&theme=dark&hide_border=true&bg_color=00000000&hide=jupyter%20notebook"
                        alt="Top Langs"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
                    <img
                      src="https://github-readme-streak-stats.herokuapp.com/?user=Rithik186&theme=dark&hide_border=true&background=00000000&ring=6366f1&currStreakNum=6366f1"
                      alt="GitHub Streak"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* LeetCode Stats Card */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative group hover:border-[#f59e0b]/30 transition-all duration-500 flex flex-col gap-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-4">
                      <Code2 size={32} className="text-[#f59e0b]" />
                      <h3 className="text-2xl font-bold text-white">LeetCode Profile</h3>
                    </div>
                    <a href="https://leetcode.com/u/rithik186/" target="_blank" className="text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors flex items-center gap-1">
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="flex-1 bg-[#111] rounded-2xl p-6 border border-white/5 flex items-center justify-center">
                    <img
                      src="https://leetcard.jacoblin.cool/rithik186?theme=dark&font=Syne&ext=heatmap"
                      alt="LeetCode Stats"
                      className="w-full h-auto"
                    />
                  </div>

                  <a href="https://leetcode.com/u/rithik186/" target="_blank" className="w-full py-4 bg-[#6366f1] hover:bg-[#5558e6] rounded-xl text-center text-white font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    Check My LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" ref={sections.contact} className="py-20 md:py-40 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-9xl font-black tracking-tighter mb-8">
                <BlurText
                  text="READY TO BUILD?"
                  animateBy="words"
                  delay={200}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-white"
                />
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Looking for a dedicated engineer to bring your visionary projects to life? Let's initialize a connection.
              </p>
            </div>

            <Magnet padding={20} magnetStrength={5}>
              <a
                href={`mailto:${CONFIG.EMAIL}`}
                className="inline-flex items-center gap-4 px-8 md:px-12 py-4 md:py-6 rounded-full bg-[#6366f1] text-white font-black text-base md:text-lg uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-500"
              >
                <Mail size={isMobile ? 20 : 24} /> Initialize Contact
              </a>
            </Magnet>
          </div>
        </section>

        {/* --- FOOTER --- */}
        {/* --- FOOTER --- */}
        {/* --- FOOTER --- */}
        <footer className="relative py-24 overflow-hidden">
          {/* Detailed Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#6366f1]/20 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6366f1]/30 rounded-full blur-[128px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ec4899]/20 rounded-full blur-[128px]" />
          </div>

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={10}
            rotationStrength={5}
            containerClassName="container mx-auto px-6 max-w-7xl relative z-10"
          >
            {/* Top Section: CTA & Brand */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-white leading-[0.8]">
                  LET'S<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#ec4899]">CREATE.</span>
                </h2>
                <p className="text-2xl font-light text-white/80 max-w-md leading-relaxed">
                  Merging art, code, and interaction to build the future of the web.
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: CONFIG.GITHUB },
                    { icon: Linkedin, href: CONFIG.LINKEDIN },
                    { icon: Youtube, href: CONFIG.YOUTUBE },
                    { icon: Mail, href: `mailto:${CONFIG.EMAIL}` }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-[#6366f1]/50 transition-all duration-300 group"
                    >
                      <social.icon size={28} className="text-white group-hover:text-[#6366f1] transition-colors" />
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${CONFIG.EMAIL}`}
                  className="text-2xl font-bold tracking-tight hover:text-[#6366f1] transition-colors border-b-2 border-transparent hover:border-[#6366f1] pb-1 w-max"
                >
                  {CONFIG.EMAIL}
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 my-12" />

            {/* Middle Section: Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#6366f1] mb-6">Sitemap</h4>
                <ul className="space-y-4">
                  {['Home', 'About', 'Work', 'Tech'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-lg text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] group-hover:scale-150 transition-transform" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#6366f1] mb-6">Socials</h4>
                <ul className="space-y-4">
                  <li><a href={CONFIG.GITHUB} target="_blank" className="text-lg text-white/60 hover:text-white transition-colors">GitHub</a></li>
                  <li><a href={CONFIG.LINKEDIN} target="_blank" className="text-lg text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href={CONFIG.YOUTUBE} target="_blank" className="text-lg text-white/60 hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-2 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-2">Location</h4>
                <p className="text-white/60 mb-6">Coimbatore, Tamil Nadu, India.</p>
                <div className="flex items-center gap-3 text-sm font-mono text-[#6366f1] bg-[#6366f1]/10 px-4 py-2 rounded-lg w-full sm:w-max border border-[#6366f1]/20">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                  OPEN FOR OPPORTUNITIES
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                © {new Date().getFullYear()} Rithik Kannaa.
              </p>
              <div className="flex gap-8 text-sm font-medium text-white/40 uppercase tracking-widest">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              </div>
            </div>
          </ScrollReveal>
        </footer>

      </div >
    </ClickSpark >
  );
}

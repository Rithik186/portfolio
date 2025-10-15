"use client";

import React from 'react';

// Animations
import AnimatedContent from '@/REACT-BITS/Animations/AnimatedContent';
import BlobCursor from '@/REACT-BITS/Animations/BlobCursor';
import ClickSpark from '@/REACT-BITS/Animations/ClickSpark';
import Crosshair from '@/REACT-BITS/Animations/Crosshair';
import Cubes from '@/REACT-BITS/Animations/Cubes';
import ElectricBorder from '@/REACT-BITS/Animations/ElectricBorder';
import FadeContent from '@/REACT-BITS/Animations/FadeContent';
import GlareHover from '@/REACT-BITS/Animations/GlareHover';
import GradualBlur from '@/REACT-BITS/Animations/GradualBlur';
import ImageTrail from '@/REACT-BITS/Animations/ImageTrail';
import LaserFlow from '@/REACT-BITS/Animations/LaserFlow';
import LogoLoop from '@/REACT-BITS/Animations/LogoLoop';
import Magnet from '@/REACT-BITS/Animations/Magnet';
import MagnetLines from '@/REACT-BITS/Animations/MagnetLines';
import MetaBalls from '@/REACT-BITS/Animations/MetaBalls';
import MetallicPaint from '@/REACT-BITS/Animations/MetallicPaint';
import Noise from '@/REACT-BITS/Animations/Noise';
import PixelTrail from '@/REACT-BITS/Animations/PixelTrail';
import PixelTransition from '@/REACT-BITS/Animations/PixelTransition';
import Ribbons from '@/REACT-BITS/Animations/Ribbons';
import ShapeBlur from '@/REACT-BITS/Animations/ShapeBlur';
import SplashCursor from '@/REACT-BITS/Animations/SplashCursor';
import StarBorder from '@/REACT-BITS/Animations/StarBorder';
import StickerPeel from '@/REACT-BITS/Animations/StickerPeel';
import TargetCursor from '@/REACT-BITS/Animations/TargetCursor';
// Text Animations
import ASCIIText from '@/REACT-BITS/Text-animations/ASCIIText';
import BlurText from '@/REACT-BITS/Text-animations/BlurText';
import CircularText from '@/REACT-BITS/Text-animations/CircularText';
import CurvedLoop from '@/REACT-BITS/Text-animations/CurvedLoop';
import DecryptedText from '@/REACT-BITS/Text-animations/DecryptedText';
import FallingText from '@/REACT-BITS/Text-animations/FallingText';
import FuzzyText from '@/REACT-BITS/Text-animations/FuzzyText';
import GlitchText from '@/REACT-BITS/Text-animations/GlitchText';
import GradientText from '@/REACT-BITS/Text-animations/GradientText';
import RotatingText from '@/REACT-BITS/Text-animations/RotatingText';
import ScrambledText from '@/REACT-BITS/Text-animations/ScrambledText';
import ScrollFloat from '@/REACT-BITS/Text-animations/ScrollFloat';
import ScrollReveal from '@/REACT-BITS/Text-animations/ScrollReveal';
import ShinyText from '@/REACT-BITS/Text-animations/ShinyText';
import Shuffle from '@/REACT-BITS/Text-animations/Shuffle';
import SplitText from '@/REACT-BITS/Text-animations/SplitText';
import TextCursor from '@/REACT-BITS/Text-animations/TextCursor';
import TextPressure from '@/REACT-BITS/Text-animations/TextPressure';
import TextTrail from '@/REACT-BITS/Text-animations/TextTrail';
import TextType from '@/REACT-BITS/Text-animations/TextType';
import TrueFocus from '@/REACT-BITS/Text-animations/TrueFocus';


export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Animations */}
      <Noise />
      <Ribbons />
      <Cubes />
      <MetaBalls />
      <PixelTransition
        firstContent={<div className="absolute inset-0 flex items-center justify-center text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600">Welcome</div>}
        secondContent={<div className="absolute inset-0 flex items-center justify-center text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600">Portfolio</div>}
      />

      {/* Cursor Animations */}
      <BlobCursor />
      <SplashCursor />
      <TargetCursor />
      <Crosshair />
      <TextCursor />

      <div className="z-10 w-full max-w-6xl text-center space-y-24 py-20">

        {/* Hero Section */}
        <header className="space-y-6">
          <ShinyText text="Rithik Kannaa K" className="text-7xl font-extrabold tracking-tight" />
          <RotatingText
            phrases={["Full Stack Developer", "Cyber Security Enthusiast", "IoT & Mobile App Developer", "Innovator", "Creator"]}
            className="text-3xl text-gray-300 font-medium"
          />
          <AnimatedContent delay={0.5}>
            <SplitText text="Welcome to my ultra-modern portfolio. Experience a new dimension of web interaction." className="text-4xl mt-8 max-w-3xl mx-auto" />
          </AnimatedContent>
        </header>

        {/* About Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h2 className="text-5xl font-bold">
              <GradientText text="About Me" />
            </h2>
            <FadeContent delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-400">
                I am a passionate developer constantly exploring new technologies to build impactful and engaging digital experiences. My expertise spans across full-stack development, cybersecurity, and innovative mobile and IoT solutions.
              </p>
            </FadeContent>
            <div className="flex justify-start space-x-4">
              <ClickSpark>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </ClickSpark>
              <GlareHover>
                <button className="px-6 py-3 border border-gray-700 hover:border-blue-500 text-lg font-semibold rounded-full transition-all duration-300">
                  My Resume
                </button>
              </GlareHover>
            </div>
          </div>
          <div className="relative w-full h-80 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
            <ImageTrail />
            <p className="text-gray-500 text-xl">Hover for Image Trail</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-12">
          <h2 className="text-5xl font-bold">
            <DecryptedText text="Skills & Expertise" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ElectricBorder>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                <BlurText text="React, Next.js, Tailwind CSS" />
              </div>
            </ElectricBorder>
            <StarBorder>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-4">Backend</h3>
                <ScrambledText text="Node.js, Python, Databases" />
              </div>
            </StarBorder>
            <GradualBlur>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-4">DevOps</h3>
                <ASCIIText text="Docker, AWS, CI/CD" />
              </div>
            </GradualBlur>
          </div>
          <div className="w-full h-64 bg-gray-900 rounded-xl flex items-center justify-center">
            <LogoLoop logos={[{ src: "/placeholder-logo.png", alt: "Logo 1" }, { src: "/placeholder-logo.svg", alt: "Logo 2" }]} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <h2 className="text-5xl font-bold">
            <FallingText text="My Projects" />
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <StickerPeel>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold mb-4">Project Alpha</h3>
                <TextType text="A revolutionary web application." />
                <p className="text-gray-400 mt-4">Details about Project Alpha.</p>
              </div>
            </StickerPeel>
            <MetallicPaint>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold mb-4">Project Beta</h3>
                <Shuffle text="An advanced data analytics platform." />
                <p className="text-gray-400 mt-4">Details about Project Beta.</p>
              </div>
            </MetallicPaint>
            <ShapeBlur>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold mb-4">Project Gamma</h3>
                <FuzzyText text="Secure IoT device management." />
                <p className="text-gray-400 mt-4">Details about Project Gamma.</p>
              </div>
            </ShapeBlur>
            <LaserFlow>
              <div className="p-8 bg-gray-900 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold mb-4">Project Delta</h3>
                <ScrollReveal text="Interactive educational platform." />
                <p className="text-gray-400 mt-4">Details about Project Delta.</p>
              </div>
            </LaserFlow>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-12">
          <h2 className="text-5xl font-bold">
            <TextTrail text="Get In Touch" />
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Magnet>
              <div className="p-8 bg-gray-900 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-4">Email Me</h3>
                <p className="text-lg text-gray-400">rithik@email.com</p>
              </div>
            </Magnet>
            <MagnetLines content={
              <div className="p-8 bg-gray-900 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-4">Connect on LinkedIn</h3>
                <p className="text-lg text-gray-400">/in/rithik-kannaa</p>
              </div>
            } />
          </div>
          <div className="w-full h-48 bg-gray-900 rounded-xl flex items-center justify-center">
            <CircularText text="RITHIK KANNAA PORTFOLIO 2024" radius={100} />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-gray-500 text-lg space-y-4">
          <p>
            <TrueFocus text="Designed with passion, built with React-Bits." />
          </p>
          <p>
            <CurvedLoop text="© 2024 Rithik Kannaa K. All rights reserved." />
          </p>
        </footer>

      </div>
    </main>
  );
}

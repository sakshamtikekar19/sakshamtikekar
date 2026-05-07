"use client";

import React, { useRef, useEffect, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, useTexture, Points, PointMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Digital Dust Particles ---
const DigitalDust = ({ count = 1200, tiltX, tiltY }: { count?: number, tiltX: any, tiltY: any }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t;
    
    // Merge mouse and gyro
    const targetX = isMobile ? tiltX.get() * 0.5 : -state.mouse.x * 2;
    const targetY = isMobile ? tiltY.get() * 0.5 : -state.mouse.y * 2;
    
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={isMobile ? 0.04 : 0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// --- Portrait Plane ---
const PortraitPlane = ({ textureUrl, onHoverChange, scrollYProgress, tiltX, tiltY }: { textureUrl: string, onHoverChange: (hovered: boolean) => void, scrollYProgress: any, tiltX: any, tiltY: any }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(textureUrl);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  useFrame((state) => {
    const { x, y } = state.mouse;
    
    // Merge mouse and gyro
    const targetRotX = isMobile ? -tiltY.get() * 0.1 : -y * 0.15;
    const targetRotY = isMobile ? tiltX.get() * 0.1 : x * 0.15;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -scrollYProgress.get() * 5, 0.1);
  });

  return (
    <mesh 
      ref={meshRef} 
      onPointerOver={() => onHoverChange(true)}
      onPointerOut={() => onHoverChange(false)}
      scale={isMobile ? [0.5, 0.5, 1] : [1, 1, 1]}
      position={[0, isMobile ? 0.2 : 0, 0]}
    >
      <planeGeometry args={[4, 5.5]} />
      <meshStandardMaterial map={texture} transparent={true} roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

// --- Magnetic Card ---
const MagneticCard = ({ children, index, isMobile }: { children: React.ReactNode, index: number, isMobile: boolean }) => {
  const ref = useRef<HTMLDivElement>(null!);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });
  const springY = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || !ref.current) return;
      const { clientX, clientY } = e;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - centerX, clientY - centerY);

      if (dist < 150) {
        x.set((clientX - centerX) * 0.4);
        y.set((clientY - centerY) * 0.4);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, isMobile]);

  const desktopPositions = [
    { top: "15%", left: "2%" },
    { top: "15%", left: "88%" },
    { top: "85%", left: "5%" },
    { top: "85%", left: "85%" },
  ];

  const mobilePositions = [
    { top: "42%", left: "2%" },
    { top: "42%", left: "68%" },
    { top: "58%", left: "2%" },
    { top: "58%", left: "68%" },
  ];

  const pos = isMobile ? mobilePositions[index] : desktopPositions[index];

  return (
    <motion.div
      ref={ref}
      className="absolute p-2 md:p-3 glass-dark rounded-lg border border-white/10 backdrop-blur-md text-[7px] md:text-[9px] font-mono text-blue-400/50 pointer-events-auto will-change-transform z-40"
      style={{
        x: springX,
        y: springY,
        top: pos?.top || "50%",
        left: pos?.left || "50%",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" } }}
    >
      {children}
    </motion.div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [mounted, setMounted] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springCursorX = useSpring(cursorX, { damping: 30, stiffness: 300 });
  const springCursorY = useSpring(cursorY, { damping: 30, stiffness: 300 });

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (!isMobile) return;
      // Gamma is left to right tilt (-90 to 90)
      // Beta is front to back tilt (-180 to 180)
      if (e.gamma !== null && e.beta !== null) {
        tiltX.set(THREE.MathUtils.clamp(e.gamma / 30, -1, 1));
        tiltY.set(THREE.MathUtils.clamp((e.beta - 45) / 30, -1, 1));
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    
    // Handle iOS permission
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .catch((e: any) => console.log('Gyro permission denied', e));
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [cursorX, cursorY, isMobile, tiltX, tiltY]);

  if (!mounted) return <div className="h-screen bg-black" />;

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] w-screen bg-[#050505] overflow-hidden flex flex-col md:block cursor-none"
      style={{ touchAction: "none" }}
    >
      <div className="film-grain" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 0, 5]} intensity={2.5} color="#3b82f6" />
          <Suspense fallback={null}>
            <DigitalDust count={isMobile ? 600 : 1200} tiltX={tiltX} tiltY={tiltY} />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <group position={[0, 0, 0]}>
                <PortraitPlane textureUrl="/saksham.png" onHoverChange={setIsHoveringImage} scrollYProgress={scrollYProgress} tiltX={tiltX} tiltY={tiltY} />
                <group position={[0, isMobile ? -1.8 : -3.2, 0.5]}>
                  <Text
                    fontSize={isMobile ? 0.07 : 0.12}
                    color="#3b82f6"
                    anchorX="center"
                    fontWeight={600}
                    letterSpacing={0.15}
                    maxWidth={isMobile ? 2.5 : 5}
                    textAlign="center"
                  >
                    FULL STACK DEVELOPER / DESIGNER / AI SOLUTION
                  </Text>
                </group>
              </group>
            </Float>
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Layers */}
      <div className="relative z-20 min-h-[100svh] w-full flex flex-col items-center justify-between py-12 md:py-24 px-4 md:px-10 pointer-events-none overflow-hidden">
        
        {/* Main Name Heading - Lowered on mobile to avoid header collision */}
        <motion.div className="text-center will-change-transform z-30 w-full mt-10 md:mt-0">
          <h1 
            className="text-[clamp(1.5rem,7vw,6rem)] font-black tracking-tighter text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            SAKSHAM TIKEKAR
          </h1>
        </motion.div>

        {/* Diagonal Content for Mobile */}
        <div className="relative w-full flex-grow mt-8 md:mt-0">
          <motion.div className={`transition-all duration-500 ${isMobile ? "absolute top-0 left-0 text-left" : "md:absolute md:top-0 md:left-0"}`}>
            <p className="text-blue-500 font-mono text-[8px] md:text-[12px] mb-1 uppercase">01. Designer</p>
            <h3 
              className="text-2xl md:text-7xl font-black leading-none mb-3 text-white"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              VISUAL<br/>THINKER
            </h3>
            <button className="btn-liquid px-4 py-2 border border-white/20 text-white rounded-full font-bold pointer-events-auto text-[10px] md:text-base">Work &rarr;</button>
          </motion.div>

          <motion.div className={`transition-all duration-500 ${isMobile ? "absolute bottom-12 right-0 text-right" : "md:absolute md:bottom-0 md:right-0"}`}>
            <p className="text-blue-500 font-mono text-[8px] md:text-[12px] mb-1 uppercase">02. Developer</p>
            <h3 
              className="text-2xl md:text-7xl font-black leading-none mb-3 text-white"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              &lt;FULL<br/>STACK/&gt;
            </h3>
            <button className="btn-liquid px-4 py-2 bg-blue-600 text-white rounded-full font-bold pointer-events-auto text-[10px] md:text-base">Hire Me</button>
          </motion.div>
        </div>

        {/* Bottom Tagline - Uplifted on mobile */}
        <div className="text-center w-full mt-4 md:mt-auto z-30">
          <p className="text-blue-500 font-medium text-[9px] md:text-sm">
            Building high-conversion websites & AI-powered solutions.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
          {["const innovate = () => {...}", "matrix.tilt(cursor.pos)", "npm install innovation", "gravity: 0.00"].map((text, i) => (
            <MagneticCard key={i} index={i} isMobile={isMobile}>{text}</MagneticCard>
          ))}
        </div>
      </div>

      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
          style={{ x: springCursorX, y: springCursorY, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: isHoveringImage ? 2 : 1 }}
        />
      )}
    </section>
  );
}

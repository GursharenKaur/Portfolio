"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating Particle Cloud ─────────────────────────────── */
function Particles({ count = 2800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const ref2 = useRef<THREE.Points>(null);

  // Sphere distribution for main cloud
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random inside a sphere
      const r = Math.random() * 5 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Gradient colour: violet → indigo → blue
      const t = Math.random();
      if (t < 0.5) {
        // violet
        colors[i * 3]     = 0.55 + t * 0.3;
        colors[i * 3 + 1] = 0.36;
        colors[i * 3 + 2] = 0.98;
      } else {
        // indigo / blue
        colors[i * 3]     = 0.39;
        colors[i * 3 + 1] = 0.40;
        colors[i * 3 + 2] = 0.95;
      }
    }

    return { positions, colors };
  }, [count]);

  // Small inner ring of brighter particles
  const ringPositions = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      const angle = (i / 400) * Math.PI * 2;
      const radius = 1.6 + Math.random() * 0.5;
      arr[i * 3]     = Math.cos(angle) * radius;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  // Gentle rotation
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.04;
      ref.current.rotation.x = t * 0.015;
    }
    if (ref2.current) {
      ref2.current.rotation.y = -t * 0.08;
      ref2.current.rotation.z = t * 0.025;
    }
  });

  return (
    <>
      {/* Main cloud */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>

      {/* Bright inner ring */}
      <Points ref={ref2} positions={ringPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </>
  );
}

/* ── Canvas wrapper ──────────────────────────────────────── */
export default function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 65 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}

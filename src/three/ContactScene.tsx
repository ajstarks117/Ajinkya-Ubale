import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Particles } from './Particles';

/**
 * Contact section 3D scene — a glowing abstract orb with surrounding particles.
 * Represents the workspace in a transformed, conclusion state.
 */
export function ContactScene() {
  return (
    <Canvas
      dpr={Math.min(window.devicePixelRatio, 1.5)}
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: false, alpha: true }}
    >
      <fog attach="fog" args={['#08090B', 3, 10]} />
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#7C5CFC" distance={8} decay={2} />
      <GlowingOrb />
      <Particles count={80} radius={3} />
    </Canvas>
  );
}

function GlowingOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.1;
      outerRef.current.rotation.y = t * 0.15;
      outerRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.15;
      innerRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      {/* Inner solid core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.3, 2]} />
        <meshStandardMaterial
          color="#7C5CFC"
          emissive="#7C5CFC"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Outer wireframe shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#7C5CFC"
          wireframe
          transparent
          opacity={0.2}
          emissive="#7C5CFC"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Orbit rings */}
      {[0.8, 1.1, 1.5].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 3 + i * 0.4, i * 0.3, 0]}>
          <torusGeometry args={[r, 0.003, 8, 64]} />
          <meshBasicMaterial color="#7C5CFC" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
}

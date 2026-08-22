import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural futuristic workspace: desk, monitor, laptop, keyboard
 * Built entirely from Three.js primitives with metallic/glass materials.
 */
export function WorkspaceModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    // Gentle floating animation
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.06;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={0.9}>
      {/* Desk surface */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[2.8, 0.04, 1.4]} />
        <meshStandardMaterial
          color="#17191F"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Desk edge glow */}
      <mesh position={[0, -0.28, 0.7]}>
        <boxGeometry args={[2.8, 0.005, 0.005]} />
        <meshBasicMaterial color="#7C5CFC" transparent opacity={0.5} />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0, -0.05, -0.3]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#111318" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Monitor base */}
      <mesh position={[0, -0.28, -0.3]}>
        <boxGeometry args={[0.4, 0.02, 0.25]} />
        <meshStandardMaterial color="#111318" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Monitor screen */}
      <group position={[0, 0.35, -0.4]}>
        {/* Bezel */}
        <mesh>
          <boxGeometry args={[1.8, 1.05, 0.04]} />
          <meshStandardMaterial color="#0A0B0D" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Screen surface */}
        <mesh position={[0, 0, 0.022]}>
          <planeGeometry args={[1.68, 0.95]} />
          <meshBasicMaterial color="#0C0E14" />
        </mesh>
        {/* Screen glow - code lines */}
        <mesh position={[-0.45, 0.25, 0.025]}>
          <planeGeometry args={[0.5, 0.01]} />
          <meshBasicMaterial color="#7C5CFC" transparent opacity={0.6} />
        </mesh>
        <mesh position={[-0.3, 0.2, 0.025]}>
          <planeGeometry args={[0.7, 0.01]} />
          <meshBasicMaterial color="#4B5563" transparent opacity={0.4} />
        </mesh>
        <mesh position={[-0.35, 0.15, 0.025]}>
          <planeGeometry args={[0.55, 0.01]} />
          <meshBasicMaterial color="#6B7280" transparent opacity={0.3} />
        </mesh>
        <mesh position={[-0.4, 0.1, 0.025]}>
          <planeGeometry args={[0.45, 0.01]} />
          <meshBasicMaterial color="#7C5CFC" transparent opacity={0.35} />
        </mesh>
        <mesh position={[-0.25, 0.05, 0.025]}>
          <planeGeometry args={[0.8, 0.01]} />
          <meshBasicMaterial color="#4B5563" transparent opacity={0.3} />
        </mesh>
        <mesh position={[-0.38, 0.0, 0.025]}>
          <planeGeometry args={[0.5, 0.01]} />
          <meshBasicMaterial color="#9CA3AF" transparent opacity={0.25} />
        </mesh>
      </group>

      {/* Laptop */}
      <group position={[-0.85, -0.26, 0.15]} rotation={[0, 0.3, 0]}>
        {/* Laptop base */}
        <mesh>
          <boxGeometry args={[0.7, 0.025, 0.45]} />
          <meshStandardMaterial color="#111318" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Laptop screen */}
        <mesh position={[0, 0.22, -0.2]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.68, 0.42, 0.015]} />
          <meshStandardMaterial color="#0A0B0D" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Laptop screen glow */}
        <mesh position={[0, 0.22, -0.19]} rotation={[-0.3, 0, 0]}>
          <planeGeometry args={[0.6, 0.35]} />
          <meshBasicMaterial color="#0D0F16" />
        </mesh>
      </group>

      {/* Keyboard */}
      <mesh position={[0.15, -0.27, 0.2]} rotation={[0, -0.05, 0]}>
        <boxGeometry args={[0.9, 0.02, 0.35]} />
        <meshStandardMaterial color="#1E2028" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.8, -0.275, 0.2]}>
        <boxGeometry args={[0.1, 0.02, 0.16]} />
        <meshStandardMaterial color="#17191F" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Small GPU component floating */}
      <FloatingChip position={[1.3, 0.2, 0.1]} />

      {/* Coffee mug */}
      <group position={[1.15, -0.2, 0.5]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.055, 0.12, 16]} />
          <meshStandardMaterial color="#1E2028" metalness={0.4} roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingChip({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + 1) * 0.08;
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.25, 0.04, 0.2]} />
      <meshStandardMaterial
        color="#17191F"
        metalness={0.9}
        roughness={0.1}
        emissive="#7C5CFC"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

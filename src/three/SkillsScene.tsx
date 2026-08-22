import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { allUniqueSkills } from '../data/skills';

interface SkillsSceneProps {
  isMobile?: boolean;
}

export function SkillsScene({ isMobile = false }: SkillsSceneProps) {
  const displaySkills = isMobile ? allUniqueSkills.slice(0, 10) : allUniqueSkills;

  return (
    <Canvas
      dpr={Math.min(window.devicePixelRatio, 1.5)}
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: false, alpha: true }}
    >
      <fog attach="fog" args={['#08090B', 5, 14]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#7C5CFC" distance={10} decay={2} />
      <CentralNode />
      <SkillLabels skills={displaySkills} />
      <OrbitRings />
    </Canvas>
  );
}

function CentralNode() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial
        color="#17191F"
        wireframe
        transparent
        opacity={0.4}
        emissive="#7C5CFC"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function SkillLabels({ skills }: { skills: string[] }) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const r = 2.5;
      return new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
    });
  }, [skills]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <group key={skill + i} position={positions[i]}>
          <mesh>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#7C5CFC" transparent opacity={0.8} />
          </mesh>
          <Html
            center
            style={{
              fontSize: '11px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              color: '#9CA3AF',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              userSelect: 'none',
              textShadow: '0 0 8px rgba(0,0,0,0.8)',
            }}
            position={[0, 0.15, 0]}
          >
            {skill}
          </Html>
        </group>
      ))}
    </group>
  );
}

function OrbitRings() {
  return (
    <group>
      {[1.4, 2.0, 2.7].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.2, 0]}>
          <torusGeometry args={[r, 0.003, 8, 64]} />
          <meshBasicMaterial color="#7C5CFC" transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  );
}

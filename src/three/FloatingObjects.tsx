import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Floating geometric objects that orbit around the workspace.
 * Mix of wireframe + solid materials for a futuristic feel.
 */
export function FloatingObjects() {
  return (
    <group>
      <FloatingShape
        position={[2, 0.8, -0.5]}
        geometry="icosahedron"
        scale={0.18}
        speed={0.4}
        rotationSpeed={0.3}
        wireframe
      />
      <FloatingShape
        position={[-1.8, 0.9, 0.3]}
        geometry="octahedron"
        scale={0.14}
        speed={0.35}
        rotationSpeed={0.5}
        wireframe={false}
        color="#7C5CFC"
        emissive
      />
      <FloatingShape
        position={[1.5, -0.5, 1]}
        geometry="torus"
        scale={0.12}
        speed={0.5}
        rotationSpeed={0.4}
        wireframe
      />
      <FloatingShape
        position={[-2.2, -0.3, -0.8]}
        geometry="box"
        scale={0.1}
        speed={0.3}
        rotationSpeed={0.6}
        wireframe
      />
      <FloatingShape
        position={[0.5, 1.2, 1.5]}
        geometry="dodecahedron"
        scale={0.09}
        speed={0.45}
        rotationSpeed={0.35}
        wireframe={false}
        color="#1E2028"
      />
      <FloatingShape
        position={[-1.2, 1.1, -1.2]}
        geometry="sphere"
        scale={0.06}
        speed={0.55}
        rotationSpeed={0.2}
        wireframe={false}
        color="#7C5CFC"
        emissive
      />
      {/* Grid plane under workspace */}
      <GridPlane />
    </group>
  );
}

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: 'icosahedron' | 'octahedron' | 'torus' | 'box' | 'dodecahedron' | 'sphere';
  scale: number;
  speed: number;
  rotationSpeed: number;
  wireframe?: boolean;
  color?: string;
  emissive?: boolean;
}

function FloatingShape({
  position,
  geometry,
  scale,
  speed,
  rotationSpeed,
  wireframe = false,
  color = '#2A2D36',
  emissive = false,
}: FloatingShapeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed + position[0]) * 0.15;
    ref.current.position.x = position[0] + Math.cos(t * speed * 0.7 + position[2]) * 0.08;
    ref.current.rotation.x = t * rotationSpeed;
    ref.current.rotation.z = t * rotationSpeed * 0.7;
  });

  const geometryEl = (() => {
    switch (geometry) {
      case 'icosahedron': return <icosahedronGeometry args={[1, 0]} />;
      case 'octahedron': return <octahedronGeometry args={[1, 0]} />;
      case 'torus': return <torusGeometry args={[1, 0.35, 8, 16]} />;
      case 'box': return <boxGeometry args={[1, 1, 1]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[1, 0]} />;
      case 'sphere': return <sphereGeometry args={[1, 12, 12]} />;
    }
  })();

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometryEl}
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={wireframe ? 0.25 : 0.8}
        metalness={wireframe ? 0 : 0.6}
        roughness={wireframe ? 1 : 0.3}
        emissive={emissive ? color : '#000000'}
        emissiveIntensity={emissive ? 0.3 : 0}
      />
    </mesh>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
      <planeGeometry args={[8, 8, 20, 20]} />
      <meshBasicMaterial
        color="#7C5CFC"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

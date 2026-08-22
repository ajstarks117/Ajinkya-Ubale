import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  radius?: number;
}

export function Particles({ count = 200, radius = 5 }: ParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const positions: { x: number; y: number; z: number; speed: number; offset: number }[] = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: (Math.random() - 0.5) * radius * 2,
        y: (Math.random() - 0.5) * radius * 2,
        z: (Math.random() - 0.5) * radius * 2,
        speed: 0.1 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return positions;
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.offset) * 0.3,
        p.y + Math.cos(t * p.speed + p.offset * 0.7) * 0.3,
        p.z + Math.sin(t * p.speed * 0.5 + p.offset) * 0.2
      );
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.008, 6, 6]} />
      <meshBasicMaterial color="#7C5CFC" transparent opacity={0.6} />
    </instancedMesh>
  );
}

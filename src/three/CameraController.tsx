import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  /** Sensitivity of mouse-follow (0–1). Lower = subtler. */
  sensitivity?: number;
  /** How much scroll zooms the camera out. */
  scrollZoomFactor?: number;
}

/**
 * Subtle mouse-follow camera with scroll-linked zoom out.
 * Lerps smoothly instead of snapping.
 */
export function CameraController({
  sensitivity = 0.3,
  scrollZoomFactor = 2,
}: CameraControllerProps) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const target = useRef(new THREE.Vector3(0, 0, 5));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(() => {
    const scrollProgress = Math.min(scrollY.current / (window.innerHeight * 0.8), 1);

    // Base camera position + mouse offset + scroll zoom
    target.current.set(
      mouse.current.x * sensitivity * 0.5,
      mouse.current.y * sensitivity * 0.3 + 0.3,
      5 + scrollProgress * scrollZoomFactor
    );

    // Smooth lerp
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

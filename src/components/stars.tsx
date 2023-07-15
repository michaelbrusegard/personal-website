import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';
import colors from '../utils/colors';

const StarsCanvas = () => {
  interface Star {
    position: [number, number, number];
    color: string;
    mesh: Mesh | null;
  }

  const Stars = () => {
    const starsRef = useRef<THREE.Group>(null);

    const starPool = useMemo(() => {
      const pool = [];

      for (let i = 0; i < 500; i++) {
        const isAccentColor = Math.random() < 0.2;
        const color = isAccentColor ? colors.accentColor : colors.textColor;
        const star: Star = {
          position: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
          color: color,
          mesh: null,
        };
        pool.push(star);
      }

      return pool;
    }, []);

    useFrame((state, delta) => {
      if (starsRef.current) {
        starsRef.current.rotation.x += delta / 10;
        starsRef.current.rotation.y += delta / 15;
      }
    });

    return (
      <group ref={starsRef}>
        {starPool.map((star, index) => {
          const { position, color } = star;

          return (
            <mesh key={index} position={position} ref={(mesh) => (star.mesh = mesh)}>
              <sphereGeometry args={[0.1, 8, 8]} attach='geometry' />
              <meshBasicMaterial color={color} />
            </mesh>
          );
        })}
      </group>
    );
  };

  return (
    <div className='absolute inset-0 -z-10 h-auto w-full'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

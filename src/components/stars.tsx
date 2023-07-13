import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';
import colors from '../utils/colors';

const StarsCanvas = () => {
  const Stars = () => {
    const starsRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
      if (starsRef.current) {
        starsRef.current.rotation.x += delta / 10;
        starsRef.current.rotation.y += delta / 15;
      }
    });

    return (
      <group ref={starsRef}>
        {Array.from(Array(550)).map((_, index) => (
          <mesh key={index} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color={colors.textColor} />
          </mesh>
        ))}
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

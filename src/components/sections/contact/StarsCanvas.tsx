import { useRef, useMemo, useEffect } from 'react';
import type { Mesh, MeshBasicMaterial, Group } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { hslToHex, getCSSColorValue } from '@/utils/color';

type Star = {
  position: [number, number, number];
  color: string;
  mesh: Mesh | null;
};

function Stars() {
  const starsRef = useRef<Group>(null);
  const { theme } = useTheme();

  const starPool = useMemo(() => {
    const pool = [];

    for (let i = 0; i < 500; i++) {
      const isAccentColor = Math.random() < 0.3;
      const color = isAccentColor
        ? hslToHex(...getCSSColorValue('--accent'))
        : hslToHex(...getCSSColorValue('--foreground'));
      const star: Star = {
        position: [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
        ],
        color,
        mesh: null,
      };
      pool.push(star);
    }

    return pool;
  }, []);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta / 10;
      starsRef.current.rotation.y += delta / 15;
    }
  });

  useEffect(() => {
    starPool.forEach((star) => {
      const isAccentColor = Math.random() < 0.3;
      const color = isAccentColor
        ? hslToHex(...getCSSColorValue('--accent'))
        : hslToHex(...getCSSColorValue('--foreground'));
      star.color = color;

      if (star.mesh) {
        const material = star.mesh.material as MeshBasicMaterial;
        material.color.set(color);
      }
    });
  }, [theme, starPool]);

  return (
    <group ref={starsRef}>
      {starPool.map((star, index) => {
        const { position, color } = star;

        return (
          <mesh
            key={index}
            position={position}
            ref={(mesh) => {
              star.mesh = mesh;
            }}
          >
            <sphereGeometry args={[0.1, 8, 8]} attach='geometry' />
            <meshBasicMaterial color={color} />
          </mesh>
        );
      })}
    </group>
  );
}

function StarsCanvas() {
  return (
    <div className='absolute inset-0 -z-10 h-auto w-full'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export { StarsCanvas };

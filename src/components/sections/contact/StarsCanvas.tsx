import { useRef, useMemo, useEffect } from 'react';
import type { Mesh, MeshBasicMaterial, Group } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';

type Star = {
  position: [number, number, number];
  color: string;
  mesh: Mesh | null;
};

function Stars() {
  const starsRef = useRef<Group>(null);
  const root = getComputedStyle(document.documentElement);

  const starPool = useMemo(() => {
    const pool = [];

    for (let i = 0; i < 500; i++) {
      const isAccentColor = Math.random() < 0.3;
      const color = isAccentColor
        ? root.getPropertyValue('--accent')
        : root.getPropertyValue('--foreground');
      const star: Star = {
        position: [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
        ],
        color: color,
        mesh: null,
      };
      pool.push(star);
    }

    return pool;
  }, [root]);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta / 10;
      starsRef.current.rotation.y += delta / 15;
    }
  });

  useEffect(() => {
    const handleColorChange = () => {
      starPool.forEach((star) => {
        const isAccentColor = Math.random() < 0.3;
        const color = isAccentColor
          ? root.getPropertyValue('--accent')
          : root.getPropertyValue('--foreground');
        star.color = color;

        if (star.mesh) {
          const material = star.mesh.material as MeshBasicMaterial;
          material.color.set(color);
        }
      });
    };

    window.addEventListener('colorsUpdated', handleColorChange);

    return () => {
      window.removeEventListener('colorsUpdated', handleColorChange);
    };
  }, [starPool, root]);

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

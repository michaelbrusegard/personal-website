'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  Preload,
  OrbitControls,
  Html,
  useProgress,
} from '@react-three/drei';

useGLTF.preload('/models/dog.glb');

function Model() {
  const { scene } = useGLTF('/models/dog.glb');
  const [scale, setScale] = useState(1.15);

  function updateScale() {
    if (window.innerWidth >= 1280) {
      setScale(1.15);
    } else {
      setScale(1.5);
    }
  }

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <primitive object={scene} scale={scale} position-y={0} rotation-y={0} />
  );
}

function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className='rounded-xl bg-secondary px-1 pt-[1px]'>
        {Math.round(progress)}%
      </p>
    </Html>
  );
}

function DogCanvas() {
  return (
    <Canvas>
      <OrbitControls
        autoRotate
        autoRotateSpeed={-4}
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
      />
      <pointLight position={[15, 10, 15]} intensity={1.5} />
      <pointLight position={[-15, 10, -15]} intensity={1.5} />
      <pointLight position={[-15, 0, 0]} intensity={1.5} />
      <Suspense fallback={<LoadingScreen />}>
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export { DogCanvas };

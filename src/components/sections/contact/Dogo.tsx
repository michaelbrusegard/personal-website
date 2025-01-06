import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  useProgress,
  useGLTF,
  Preload,
} from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p className='rounded-xl bg-secondary px-1 pt-[1px]'>
        {progress ? `${(progress * 100).toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

function Dog() {
  const [scale, setScale] = useState(1.15);

  const updateScale = () => {
    if (window.innerWidth >= 1280) {
      setScale(1.15);
    } else {
      setScale(1.5);
    }
  };

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
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
        <DogScene scale={scale} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

function DogScene({ scale }: { scale: number }) {
  const dog = useGLTF('/models/dog.glb');
  return (
    <primitive object={dog.scene} scale={scale} position-y={0} rotation-y={0} />
  );
}

export { Dog };

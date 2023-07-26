import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress, useGLTF, Preload } from '@react-three/drei';
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
      <p className='section-subtitle pointer-events-none rounded-xl bg-secondary px-1 pt-[1px] opacity-100'>
        {progress ? `${(progress * 100).toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

interface DogProps {
  scale: number;
}

const Dog = ({ scale }: DogProps) => {
  const dog = useGLTF('/models/dog.glb');
  return <primitive object={dog.scene} scale={scale} position-y={0} rotation-y={0} />;
};

const DogCanvas = () => {
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
        <OrbitControls autoRotate autoRotateSpeed={-4} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 4} minPolarAngle={Math.PI / 4} />
        <pointLight position={[15, 10, 15]} intensity={1.5} />
        <pointLight position={[-15, 10, -15]} intensity={1.5} />
        <pointLight position={[-15, 0, 0]} intensity={1.5} />
        <Dog scale={scale} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DogCanvas;

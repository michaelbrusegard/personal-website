import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Preload, OrbitControls } from '@react-three/drei';

useGLTF.preload('/models/dog.glb');

function Model() {
  const { scene } = useGLTF('/models/dog.glb');
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
    <primitive object={scene} scale={scale} position-y={0} rotation-y={0} />
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
      <ambientLight intensity={0.5} />
      <pointLight position={[15, 10, 15]} intensity={1.5} />
      <pointLight position={[-15, 10, -15]} intensity={1.5} />
      <pointLight position={[-15, 0, 0]} intensity={1.5} />
      <Model />
      <Preload all />
    </Canvas>
  );
}

export { DogCanvas };

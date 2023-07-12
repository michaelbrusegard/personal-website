import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Dog = () => {
  const dog = useGLTF('/models/dog.glb');
  return <primitive object={dog.scene} scale={1.75} position-y={0} rotation-y={0} />;
};

const DogCanvas = () => {
  return (
    <Canvas>
      <OrbitControls autoRotate autoRotateSpeed={-4} enableZoom={false} maxPolarAngle={Math.PI / 4} minPolarAngle={Math.PI / 4} />
      <pointLight position={[15, 10, 15]} intensity={1.5} />
      <pointLight position={[-15, 10, -15]} intensity={1.5} />
      <pointLight position={[-15, 0, 0]} intensity={1.5} />
      <Dog />
    </Canvas>
  );
};

export default DogCanvas;

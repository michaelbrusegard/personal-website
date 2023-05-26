import { Canvas } from '@react-three/fiber';

const DogCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default DogCanvas;

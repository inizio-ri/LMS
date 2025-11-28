"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import LaptopModel from "../components/LaptopModel";

const ModelSection = () => {
  return (
    <div className="w-full h-[500px] bg-black">
      <Canvas camera={{ position: [3, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <LaptopModel scale={2} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelSection;
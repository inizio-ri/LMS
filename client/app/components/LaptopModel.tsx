// "use client";

// import { useGLTF } from "@react-three/drei";
// import { Group } from "three";

// export default function LaptopModel(props: JSX.IntrinsicElements["group"]) {
//   const { scene } = useGLTF("/models/laptop_free/scene.gltf") as { scene: Group };

//   return <primitive object={scene} {...props} />;
// }

// useGLTF.preload("/models/scene.gltf");

// "use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { ACESFilmicToneMapping, sRGBEncoding } from "three";

// export default function BannerModel() {
//   const gltf = useGLTF("/models/laptop_free/scene.gltf");

//   return (
//     <Canvas
//       camera={{ position: [3, 2, 5], fov: 45 }}
//       onCreated={({ gl }) => {
//         gl.toneMapping = ACESFilmicToneMapping;
//         gl.outputEncoding = sRGBEncoding;
//         gl.toneMappingExposure = 1.5;
//       }}
//     >
//       {/* FIX 1: Base ambient light */}
//       <ambientLight intensity={1.5} />

//       {/* FIX 2: Directional key light */}
//       <directionalLight position={[5, 5, 5]} intensity={2} />

//       {/* FIX 3: Fill light */}
//       <directionalLight position={[-5, 2, 2]} intensity={1} />

//       {/* FIX 4: Hemisphere light */}
//       <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={1} />

//       {/* Model */}
//       <primitive object={gltf.scene} scale={1.5} />

//       {/* Controls */}
//       <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.2} />
//     </Canvas>
//   );
// }

// useGLTF.preload("/models/laptop_free/scene.gltf");

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function LaptopModel() {
  const gltf = useGLTF("/models/laptop_free/scene.gltf");

  return (
    <Canvas
      camera={{ position: [0, 1.5, 12], fov: 28 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, 2, 2]} intensity={0.7} />

      {/* FIXED MODEL SCALE + POSITION */}
      <primitive
        object={gltf.scene}
        scale={0.02}          // smaller to avoid zoom
        position={[0, -1.4, 0]}  // place inside the circle
        rotation={[0, Math.PI / 4, 0]} // nice angle
      />

      {/* Controls */}
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.0} />
    </Canvas>
  );
}

useGLTF.preload("/models/laptop_free/scene.gltf");

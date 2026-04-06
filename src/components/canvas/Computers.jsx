import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow={false}
      />
      <pointLight intensity={1.2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const smallQuery = window.matchMedia("(max-width: 380px)");

    setIsMobile(mobileQuery.matches);
    setIsVerySmall(smallQuery.matches);

    const handleMobile = (e) => setIsMobile(e.matches);
    const handleSmall = (e) => setIsVerySmall(e.matches);

    mobileQuery.addEventListener("change", handleMobile);
    smallQuery.addEventListener("change", handleSmall);

    return () => {
      mobileQuery.removeEventListener("change", handleMobile);
      smallQuery.removeEventListener("change", handleSmall);
    };
  }, []);

  // On very small screens skip 3D entirely for performance
  if (isVerySmall) {
    return null;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false, antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

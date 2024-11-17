import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import React from "react";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose && mat.dispose());
            } else {
              child.material.dispose && child.material.dispose();
            }
          }
        }
      });
    };
  }, [scene]);

  // Adjust scale and position based on device size
  const scale = isMobile ? 0.5 : 0.75; // Smaller scale for mobile
  const position = isMobile ? [0, -3, -1.8] : [0, -3.25, -1.5]; // Adjust position for mobile

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={2} decay={0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        decay={0}
      />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 500); // Set mobile breakpoint
    };

    updateSize(); // Initial check
    window.addEventListener("resize", updateSize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1] : [1, 2]} // Adjust pixel density for mobile
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }} // Adjust FOV for mobile
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={!isMobile} // Disable zoom on mobile
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

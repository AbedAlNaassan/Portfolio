import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import React from "react";

const Computers = ({ deviceType }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  // Dispose of the GLTF assets to avoid memory leaks
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) child.geometry.dispose();
        if (child.material) {
          Object.values(child.material).forEach((mat) => mat.dispose());
        }
      });
    };
  }, [scene]);

  let scale = 0.75;
  let position = [0, -3.25, -1.5];

  if (deviceType === "mobile") {
    scale = 0.7;
    position = [0, -3, -2.2];
  } else if (deviceType === "tablet") {
    scale = 0.73;
    position = [0, -3.1, -1.8];
  }

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
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth <= 500) {
        setDeviceType("mobile");
      } else if (window.innerWidth > 500 && window.innerWidth <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initialize device type on mount
    updateDeviceType();

    // Update device type on resize
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={deviceType === "mobile" ? [1, 1] : [1, 2]} // Adjusting the DPR for mobile devices
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }} // Disabling preserveDrawingBuffer for performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={deviceType !== "mobile"} // Disabling zoom on mobile devices for performance
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers deviceType={deviceType} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

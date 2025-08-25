import {
  Environment,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";
import { House } from "@/components/model";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Scene = ({ progress, targetPosition, floor }) => {
  const envMap = useEnvironment({ files: "/hdri/park.hdr" });

  const cameraRef = useRef(null);
  const houseRef = useRef(null);

  useFrame(() => {
    cameraRef.current.lookAt(0, 0, 0);
  });

  useEffect(() => {
    if (houseRef.current) {
      const targetY = floor === 2 ? -2 : -0.6;

      gsap.to(houseRef.current.position, {
        y: targetY,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, [floor]);

  useEffect(() => {
    const updateCamPos = () => {
      const positions = [
        [-4.5, 1.5, 5.6],
        [-4.2, 1.1, 5.2],
        [4.8, 0.4, 4.4],
        [5.2, 0.4, 4],
        [5.1, 2.4, -5.2],
        [4.2, 2.4, -5.4],
        [-3, 1.6, -6],
        [-3.4, 0.6, -5.2],
        [-5.2, 0.2, 0],
        [-5.2, 0.2, 0],
      ];

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: -5.2,
          y: 0.2,
          z: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        const segmentProgress = 1 / 9;

        const segmentIndex = Math.floor(progress / segmentProgress);

        const percentage = (progress % segmentProgress) / segmentProgress;

        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1] || positions[0];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;

        gsap.to(cameraRef.current.position, {
          x,
          y,
          z,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    updateCamPos();
  }, [progress, cameraRef.current]);

  useEffect(() => {
    if (targetPosition && cameraRef.current) {
      if (Array.isArray(targetPosition[0])) {
        const tl = gsap.timeline();
        targetPosition.forEach((pos) => {
          tl.to(cameraRef.current.position, {
            x: pos[0],
            y: pos[1],
            z: pos[2],
            duration: 1.2,
            ease: "power2.inOut",
          });
        });
      } else {
        gsap.to(cameraRef.current.position, {
          x: targetPosition[0],
          y: targetPosition[1],
          z: targetPosition[2],
          duration: 1.2,
          ease: "power2.inOut",
        });
      }
    }
  }, [targetPosition]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={60}
        near={0.1}
        far={1000}
        makeDefault
        position={[-4.5, 1.5, 5.6]}
      />
      <Environment map={envMap} background />
      <House ref={houseRef} position={[0, -0.6, 0]} />
    </>
  );
};

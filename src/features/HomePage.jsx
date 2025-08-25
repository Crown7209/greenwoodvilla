"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/home/Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { rooms } from "@/components/home";
import { About, Features, Footer, Overview } from "@/components/home";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const mainRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [targetPosition, setTargetPosition] = useState(null);
  const [floor, setFloor] = useState(1);
  const [activeRoom, setActiveRoom] = useState(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });
  }, []);

  const goToRoom = (positions, floorNumber = 1, roomId) => {
    setTargetPosition(positions);
    setFloor(floorNumber);
    setActiveRoom(roomId);
  };

  return (
    <div
      ref={mainRef}
      className="h-[500vh] w-full bg-gradient-to-r from-black/50 to-transparent"
    >
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Canvas>
          <Scene
            progress={progress}
            targetPosition={targetPosition}
            floor={floor}
          />
        </Canvas>
      </div>

      <Overview />

      <About />

      <div className="w-full h-screen flex items-center px-4 md:px-24 ">
        <div className="flex flex-col gap-6 max-w-[540px] w-full">
          <p className="text-white text-6xl font-semibold">Select your room</p>

          <div className="flex flex-col gap-1 max-w-[420px] w-full">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => goToRoom(room.positions, room.floor, room.id)}
                className={`w-full h-[70px] border border-neutral-600 rounded-lg px-8 py-3 flex gap-8 cursor-pointer transition-all duration-300 hover:bg-white/40 hover:border-white group ${
                  activeRoom === room.id
                    ? "bg-white/40 border-white"
                    : "bg-black/20"
                }`}
              >
                <div className="flex items-center justify-center">
                  <p className="text-white text-base font-normal">
                    {room.floor}F
                  </p>
                </div>
                <div
                  className={`w-[1px] h-full bg-neutral-600 group-hover:bg-white ${
                    activeRoom === room.id ? "bg-white" : "bg-neutral-600"
                  }`}
                ></div>
                <div className="flex flex-col">
                  <p className="text-neutral-300 text-sm font-light">
                    {room.name}
                  </p>
                  <p className="text-white text-base font-normal">
                    {room.size}m²
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Features />

      <Footer />
    </div>
  );
};

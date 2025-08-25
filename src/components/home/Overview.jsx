import { MapPin } from "lucide-react";

export const Overview = () => {
  return (
    <div className="w-full h-screen flex items-center px-4 md:px-24">
      <div className="flex flex-col gap-6 max-w-[540px] w-full">
        <p className="text-white text-6xl font-semibold">Greenwood Villa</p>
        <p className="text-neutral-300 text-lg font-normal max-w-[420px]">
          A modern retreat in a peaceful neighborhood. Experience the harmony of
          nature with the comfort of urban living in Józefów.
        </p>
        <div className="flex gap-4 items-center">
          <div className="border border-neutral-300 rounded-full p-4 bg-black/20">
            <MapPin className="text-neutral-300" size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col ">
            <p className="text-lg font-semibold">Józefów, Lipowa Street 12</p>
            <p className="text-lg font-semibold">Poland</p>
          </div>
        </div>

        <div className="w-full py-4">
          <div className="w-full h-[1px] bg-neutral-300"></div>
        </div>

        <div className="w-full flex gap-12">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold">0.4 km</p>
            <p className="text-lg leading-6 text-neutral-300 font-normal">
              to local shops and bus stops
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold">2.5 km</p>
            <p className="text-lg leading-6 text-neutral-300 font-normal">
              to Warsaw ring road
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold">0.2 km</p>
            <p className="text-lg leading-6 text-neutral-300 font-normal">
              to scenic forests and rivers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

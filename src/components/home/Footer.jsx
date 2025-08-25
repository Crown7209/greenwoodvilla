import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-end px-4 md:px-24 bg-gradient-to-t from-black to-transparent">
      <div className="text-center mb-16">
        <p className="text-white text-6xl font-semibold mb-6">
          Ready to Experience
        </p>
        <p className="text-neutral-300 text-xl font-normal max-w-[600px] mx-auto">
          Contact us today to schedule a viewing and discover your perfect home
          at Greenwood Villa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">
              <Phone color="white" size={24} strokeWidth={1.5} />
            </span>
          </div>
          <p className="text-white text-lg font-semibold mb-2">Call Us</p>
          <p className="text-neutral-300">+48 123 456 789</p>
          <p className="text-neutral-300">Mon-Fri 9:00-18:00</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">
              <Mail color="white" size={24} strokeWidth={1.5} />
            </span>
          </div>
          <p className="text-white text-lg font-semibold mb-2">Email Us</p>
          <p className="text-neutral-300">info@greenwoodvilla.pl</p>
          <p className="text-neutral-300">24/7 Support</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">
              <MapPin color="white" size={24} strokeWidth={1.5} />
            </span>
          </div>
          <p className="text-white text-lg font-semibold mb-2">Visit Us</p>
          <p className="text-neutral-300">Lipowa Street 12</p>
          <p className="text-neutral-300">Józefów, Poland</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <Image
            src="/villa.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-white text-lg font-semibold">Greenwood Villa</p>
          <p className="text-neutral-300 text-sm">Premium Real Estate</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/20 mt-16"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400 py-8">
        <p>© 2024 Greenwood Villa. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Cookie Policy
          </span>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Donation() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/catDonate.png"
        width={1000}
        height={1000}
        className="object-cover w-screen h-screen"
        alt="Donation"
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-20 flex justify-center">
        <div className="animate-fade-up animate-ease-out mt-3 flex flex-col md:flex-row justify-center md:gap-24 lg:gap-[7rem]">
          <div className="w-full  text-center mt-40 ml-20 md:text-left px-4 mr-[10rem]">
            <h1 className="text-4xl md:text-5xl font-extrabold">
            Why Your Donation Matters
            </h1>
            <p className="text-lg md:text-xl mt-6">
              “Your donation helps us rescue, care for, and find loving homes for abandoned cats. Every dollar provides food, medical care, and a safe environment. Your support gives these cats a chance for a better life.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Donation() {
  return (
    <>
    <div className="overflow-hidden relative hidden md:block">
      <Image
        src="/images/catDonate.png"
        width={400}
        height={400}
        className="object-cover w-screen h-screen"
        alt="Donation"
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
  <div className="animate-fade-up animate-ease-out mt-3 flex flex-col md:flex-row justify-center md:gap-24 lg:gap-28 p-4 md:p-10">
    <div className="w-full text-center md:text-left px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        WHY YOUR DONATION MATTERS
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 md:w-3/4 lg:w-1/2">
        Your donation helps us rescue, care for, and find loving homes for abandoned cats. Every dollar provides food, medical care, and a safe environment. Your support gives these cats a chance for a better life.
      </p>
    </div>
  </div>
</div>
</div>


    <div className="overflow-hidden relative block md:hidden">
      <Image
        src="/images/catDonate.png"
        width={400}
        height={400}
        className="object-cover w-full h-full sm:w-screen sm:h-screen md:w-auto md:h-auto"
        alt="Donation"
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
        <div className="animate-fade-up animate-ease-out mt-3 flex flex-col md:flex-row justify-center md:gap-24 lg:gap-28 p-4 md:p-10">
          <div className="w-full text-center md:text-left px-4 md:px-8 lg:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              WHY YOUR DONATION MATTERS
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 md:w-3/4 lg:w-1/2">
              Your donation helps us rescue, care for, and find loving homes for abandoned cats. Every dollar provides food, medical care, and a safe environment. Your support gives these cats a chance for a better life.
            </p>
          </div>
        </div>
      </div>
    </div>
  



</>

    
  );
}


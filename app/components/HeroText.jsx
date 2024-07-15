import Image from "next/image";
import PrettyButton from "./PrettyButton";

export default function HeroText() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/herotextBg.png"
        width={700}
        height={700}
        className="object-cover w-screen h-screen"
        alt="abu hurairah club iium"
      />
      <div className="absolute w-screen h-[93.2vh] inset-0 bg-black bg-opacity-[22%]">
        <div className="">
          {/* the content */}
          <div className="text-center animate-fade-up animate-ease-out mt-[6rem] ">
            <div className="flex flex-row items-center justify-center gap-20">
              <div>
                <Image
                  src="/images/big logo AHC.png"
                  width={400}
                  height={400}
                  className="object-contain"
                  alt="abu hurairah club iium"
                />
              </div>
              <div className="text-white text-left">
                <h2 className="text-5xl font-bold">Welcome to..</h2>
                <h1 className="font-bold text-7xl">
                  ABU HURAIRAH <br /> IIUM CLUB
                </h1>
                <p className="text-2xl">
                  The Abu Hurairah Club aims to give all homeless <br /> and
                  abandoned cats and kittens a chance of <br /> survival and a
                  new home.
                </p>
              </div>
            </div>
            {/* the button  */}
            <div className="inline-block mt-10 relative">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20">
                <Image
                  src="/images/cat-removebg-preview 2.png"
                  width={400}
                  height={400}
                  className="object-contain mt-1 w-[24rem] h-16"
                  alt="abu hurairah club iium"
                />
              </div>

              <div className="mt-[0.5px]">
                <PrettyButton
                  text="Contact us"
                  link="https://www.google.com"
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

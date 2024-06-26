import Image from "next/image";
import PrettyButton from "./PrettyButton";

export default function HeroText() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/cat1.jpg"
        width={400}
        height={400}
        className=" object-cover w-screen h-screen"
      ></Image>
      <div className="absolute w-screen h-screen inset-0 bg-black bg-opacity-75">
        <div className="">
          <div className="text-center animate-fade-up animate-ease-out py-20 md:py-32 lg:py-40 ">
            <h1 className="text-5xl font-extrabold text-white text-nowrap lg:text-8xl md:text-9xl">
              Abu Hurairah Club
            </h1>
            <p className="text-white font-bold tracking-widest text-4xl my-9 drop-shadow-lg">
              | WE SAVE, WE CARE |
            </p>
            <div className="inline-block mt-12 relative ">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20">
                <Image
                  src="/images/cat-removebg-preview 2.png"
                  width={400}
                  height={400}
                  className="object-contain mt-1 w-[24rem] h-16 "
                />
              </div>
             
                <div className="mt-[0.5px]">
                  <PrettyButton
                    text="Register Now"
                    link="https://www.google.com"
                    className="relative z-10"
                  ></PrettyButton>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

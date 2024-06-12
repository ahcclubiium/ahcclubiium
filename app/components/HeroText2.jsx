import Image from "next/image";
import PrettyButton from "./PrettyButton";

export default function HeroText2() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/cat1.jpg"
        width={400}
        height={400}
        className=" object-cover w-[100rem] h-screen"
      ></Image>
      <div className="absolute w-[100rem] h-screen inset-0 bg-black bg-opacity-85">
        <div className="">
          <div className="text-center animate-fade-up animate-ease-out py-20 md:py-32 lg:py-40 ">
            <h1 className="text-5xl font-extrabold text-white text-nowrap lg:text-8xl md:text-9xl">
              Abu Hurairah Club
            </h1>
            <p className="text-white font-bold tracking-widest text-4xl my-9 drop-shadow-lg">
              | WE SAVE, WE CARE |
            </p>
            <PrettyButton
              text="Register Now"
              link="https://www.google.com"
              className="mt-12"
            ></PrettyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

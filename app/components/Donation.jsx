import Image from "next/image";
import PrettyButton from "./PrettyButton";
import Heading from "./Heading";

export default function Donation() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/catDonate.png"
        width={400}
        height={400}
        className=" object-cover w-screen h-screen"
      ></Image>
      <div className="absolute w-screen h-screen inset-0 bg-black bg-opacity-20">
        <div className="">
          {/* the content */}
          <div className="text-center animate-fade-up animate-ease-out flex flex-row">
            <div className="w-[25rem] bg-slate-700 m-40">
              <Heading text={"OPEN DONATION"}></Heading>
              <p>
                “Our mission is to provide shelter, food, and medical care to
                stray and abandoned cats. Your support helps us save lives and
                find loving homes for our feline friends.”
              </p>
            </div>
            <div>
              <div className="bg-white opacity-55">
                <PrettyButton
                  text="Donate Now"
                  link="https://www.google.com"
                ></PrettyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

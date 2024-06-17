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
          <div className=" animate-fade-up animate-ease-out mt-24 flex flex-row justify-center gap-24">
            <div className="w-[25rem]">
              <h1 className="text-5xl font-extrabold">
                OPEN <br />
                FOR <br />
                DONATION
              </h1>
              <p className="text-xl mt-6">
                “Our mission is to provide shelter, food, and medical care to
                stray and abandoned cats. Your support helps us save lives and
                find loving homes for our feline friends.”
              </p>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-40 w-[23rem] h-[30rem] rounded-2xl">
                <div>
                  <div>
                    <h1 className="text-black pl-6 pt-10 font-extrabold text-2xl">
                      CONTACT US
                    </h1>
                  </div>
                  {/* contact */}

                  <div className="p-7 text-l">
                    <div className="text-black mt-6 flex flex-row">
                      <h1 className="font-bold">Email :</h1>
                      <p>abuhurairahclubiium@gmail.com</p>
                    </div>
                    <div className="text-black mt-6 flex flex-row">
                      <h1 className="font-bold">Instagram :</h1>
                      <p>@ahc_iium</p>
                    </div>
                    <div className="text-black mt-6 flex flex-row">
                      <h1 className="font-bold">Facebook :</h1>
                      <p>Abu Hurairah Club IIUM</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Separate button container */}
              <div className="absolute bottom-4 right-4 opacity-100">
                <button className="p-3 px-6 bg-[#FD775D] rounded-3xl text-white font-bold border-2 border-black w-40 hover:bg-red-600/80">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

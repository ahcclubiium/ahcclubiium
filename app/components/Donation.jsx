import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Donation() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src="/images/catDonate.png"
        width={400}
        height={400}
        className="object-cover w-screen h-screen"
        alt="Donation"
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
        <div className="animate-fade-up animate-ease-out mt-3 flex flex-col md:flex-row justify-center md:gap-24 lg:gap-[7rem]">
          <div className="w-full md:w-[25rem] text-center md:text-left px-4 mr-[10rem]">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              OPEN <br />
              FOR <br />
              DONATION
            </h1>
            <p className="text-lg md:text-xl mt-6">
              “Our mission is to provide shelter, food, and medical care to
              stray and abandoned cats. Your support helps us save lives and
              find loving homes for our feline friends.”
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <div className="bg-white bg-opacity-40 w-full md:w-[23rem] h-auto md:h-[30rem] rounded-2xl p-6 md:p-0">
              <h1 className="text-black text-2xl font-extrabold md:pl-6 md:pt-10">
                CONTACT US
              </h1>
              <div className="text-black mt-6 space-y-4 mx-3 md:space-y-6">
                <div className="flex flex-col md:flex-row">
                  <h1 className="font-bold   md:w-28">Email:</h1>
                  <p>abuhurairahclubiium@gmail.com</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h1 className="font-bold md:w-28">Instagram:</h1>
                  <p>@ahc_iium</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h1 className="font-bold md:w-28">Facebook:</h1>
                  <p>Abu Hurairah Club IIUM</p>
                </div>
              </div>
              {/* <div className="flex justify-center mt-6 space-x-4">
                <a
                  href="https://www.instagram.com/@ahc_iium/"
                  className="text-4xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/ahc.iium/"
                  className="text-4xl"
                >
                  <FaFacebook />
                </a>
              </div> */}
            </div>
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-100">
              <button className="p-3 px-6 bg-[#FD775D] rounded-3xl text-white font-bold border-2 border-black w-full md:w-40 hover:bg-red-600/80">
              <a href="https://docs.google.com/forms/u/0" className="transition ease-in-out hover:text-white/80">Donation</a>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

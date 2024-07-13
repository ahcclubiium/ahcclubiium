//main page
"use client";

import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import Image from "next/image";
import Organization from "./components/Organization";
import HeroText from "./components/HeroText";
import HeadingAboutus from "./components/HeadingMain";
import PrettyButton from "./components/PrettyButton";
import { useRef, useEffect, useState } from "react";

export default function page() {
  const heroTextSectionRef = useRef(null);
  const catImageRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //determine heroText position
      const heroTextSection = heroTextSectionRef.current;
      const catImage = catImageRef.current;

      if (heroTextSection && catImage) {
        const heroTextBottom = heroTextSection.getBoundingClientRect().bottom; //detect HeroText bottom position

        if (heroTextBottom <= 0) {
          //detect current position
          setIsSticky(true); //if under HeroText div setSticky to tru
        } else {
          setIsSticky(false); //if at Herotext div setSticky to false
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check pf initial position heroText
    handleScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); //prevent memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <section>
      <main>
        <section
          id="heroText"
          ref={heroTextSectionRef}
          className="h-screen flex justify-center items-center "
        >
          <HeroText></HeroText>
        </section>

        {/* intro and mission  */}
        <section className="py-12">
          <div className="lg:px-64">
            <div
              ref={catImageRef} //to manipulate the DOM
              className={`fixed left-0 top-[200px] mt-[3rem] z-10 ${
                isSticky ? "block" : "hidden"
              }`}
              style={{ position: isSticky ? "fixed" : "absolute" }}
            >
              {/* <button className="text-center">
                <div className="text-wrap w-32 h-44 flex flex-col text-xl font-bold shadow p-6 bg-[#DAAF2C] rounded-r-3xl absolute left-0 border-2 border-black  ">
                  <h3 className="text-2xl font-bold text-black py-7 pr-5">
                    <a
                      href="/donation"
                      className="transition ease-in-out flex justify-center hover:text-white/80"
                    >
                      DONATE HERE
                    </a>
                  </h3>
                </div>
                <div className="ml-4">
                  <Image
                    src="/images/cute donate cat.png"
                    width={140}
                    height={140}
                    className="object-contain  left-[4rem]  top-[200px] mt-[5rem] z-10 md:fixed "
                  />
                </div>
              </button> */}
            </div>

            {/* <div className="flex flex-col justify-center items-center text-center mt-20 ">
              <HeadingAboutus text={"About Us"}></HeadingAboutus>
            </div> */}
            {/* <div className="absolute left-0">
              <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover mb-1"
              />
            </div> */}
            <div className="flex flex-col gap-20 justify-center items-center animate-fade-down">
              <div className="flex flex-col justify-center items-center mt-14 h-auto ">
                {/* <div className="text-wrap w-64 flex flex-col items-center justify-center text-xl font-bold mx-5 rounded-3xl shadow p-6 bg-[#BD9468] border-0  absolute top mb-24">
                  <Heading text={"Introduction"}></Heading>
                </div>
                <p className="text-wrap text-center leading-8 text-xl font-bold mx-5 rounded-3xl  shadow p-20 px-6 bg-[#FFD9B0] border-2  mt-28">
                  The Abu Hurairah Club aims to give all homeless and abandoned
                  cats and kittens a chance of survival and new home
                </p> */}{" "}
                <h1 className="font-semibold text-[75.5px] text-[#866C5D] ">
                  ABOUT US{" "}
                </h1>
                <p className="text-[34.93px] text-center text-[#6F6459]">
                  The Abu Hurairah Club aims to give all homeless <br /> and
                  abandoned cats and kittens a chance of <br /> survival and a
                  new home.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-[64rem]  h-auto">
                <h1 className="text-[66.96px] font-light text-[#DAAF2C] flex justify-center">
                  MISSION
                </h1>
                <p className=" w-auto text-center font-light leading-8 text-[24.28px] mx-5 rounded-3xl shadow p-5 px-20 bg-[#FFD878] border-2 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] mt-14 tracking-widest">
                  Our mission is to be the rescuer of the animals <br /> in IIUM
                  by volunteering and guide other <br /> people to help animals
                  in need. Showing mercy <br /> and share the love towards
                  animals which is <br /> also the creations of Allah swt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stories */}
        <section>
          <div>
            {/* first story */}
            <div className="flex flex-row bg-[#958C81] w-[75rem]  h-[36rem] rounded-r-[3.5rem]">
              <div className="m-12">
                <Image
                  src="/images/story2.png"
                  width={400}
                  height={400}
                  className="object-contain absolute z-0  "
                />
                <Image
                  src="/images/story1.png"
                  width={400}
                  height={400}
                  className="object-contain absolute z-10 mt-[13rem] ml-20  "
                />
              </div>
              <div className="flex flex-col">
                {/* the logo */}
                <div className="flex flex-row items-center">
                  <div className="ml-[27rem] bg-[#FFD878] rounded-[2rem] mt-12 flex flex-row">
                    <Image
                      src="/images/volunteer1.png"
                      width={120}
                      height={120}
                      className="object-contain   "
                    />
                  </div>
                  <p className="ml-7 mt-[3rem] text-[29.36px] font-bold ">
                    AWARENESS AND <br /> VOLUNTERISM
                  </p>
                </div>
                <p className="ml-[30rem] mt-5 w-[35rem] text-[21.21px]">
                  Raising awareness about feline issues is a key part of the Cat
                  Club's mission. The club organizes educational programs to
                  inform the public about responsible cat ownership, the
                  benefits of spaying and neutering, and the dangers of
                  declawing. Through workshops and social media, the club shares
                  knowledge about common health and behavioral issues, providing
                  resources to help cat owners offer the best care possible.
                </p>
              </div>
            </div>
            {/* second story */}
            <div>
              <div className="flex flex-row bg-[#F6E6B4]  h-[36rem] rounded-l-[3.5rem] justify-end">
                <div className="m-12">
                  <Image
                    src="/images/story2.png"
                    width={400}
                    height={400}
                    className="object-contain absolute z-0  "
                  />
                  <Image
                    src="/images/story1.png"
                    width={400}
                    height={400}
                    className="object-contain absolute z-10 mt-[13rem] ml-20  "
                  />
                </div>
                <div className="flex flex-col">
                  {/* the logo */}
                  <div className="flex flex-row items-center">
                    <div className="ml-[27rem] bg-[#FFD878] rounded-[2rem] mt-12 flex flex-row">
                      <Image
                        src="/images/volunteer1.png"
                        width={120}
                        height={120}
                        className="object-contain   "
                      />
                    </div>
                    <p className="ml-7 mt-[3rem] text-[29.36px] font-bold ">
                      AWARENESS AND <br /> VOLUNTERISM
                    </p>
                  </div>
                  <p className="ml-[30rem] mt-5 w-[35rem] text-[21.21px]">
                    Raising awareness about feline issues is a key part of the
                    Cat Club's mission. The club organizes educational programs
                    to inform the public about responsible cat ownership, the
                    benefits of spaying and neutering, and the dangers of
                    declawing. Through workshops and social media, the club
                    shares knowledge about common health and behavioral issues,
                    providing resources to help cat owners offer the best care
                    possible.
                  </p>
                </div>
              </div>
            </div>
            {/* third story */}
            <div className="flex flex-row bg-[#958C81] w-[75rem]  h-[36rem] rounded-r-[3.5rem]">
              <div className="m-12">
                <Image
                  src="/images/story2.png"
                  width={400}
                  height={400}
                  className="object-contain absolute z-0  "
                />
                <Image
                  src="/images/story1.png"
                  width={400}
                  height={400}
                  className="object-contain absolute z-10 mt-[13rem] ml-20  "
                />
              </div>
              <div className="flex flex-col">
                {/* the logo */}
                <div className="flex flex-row items-center">
                  <div className="ml-[27rem] bg-[#FFD878] rounded-[2rem] mt-12 flex flex-row">
                    <Image
                      src="/images/volunteer1.png"
                      width={120}
                      height={120}
                      className="object-contain   "
                    />
                  </div>
                  <p className="ml-7 mt-[3rem] text-[29.36px] font-bold ">
                    AWARENESS AND <br /> VOLUNTERISM
                  </p>
                </div>
                <p className="ml-[30rem] mt-5 w-[35rem] text-[21.21px]">
                  Raising awareness about feline issues is a key part of the Cat
                  Club's mission. The club organizes educational programs to
                  inform the public about responsible cat ownership, the
                  benefits of spaying and neutering, and the dangers of
                  declawing. Through workshops and social media, the club shares
                  knowledge about common health and behavioral issues, providing
                  resources to help cat owners offer the best care possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* thee card, adoption, awareness... */}
        <section className="my-20 flex justify-center w-screen h-screen "></section>

        {/* program */}
        <section>
          <div className="my-50 px-40">
            <div className="flex flex-col justify-center items-center text-center p-10 m-20">
              <HeadingAboutus text={"Program"}></HeadingAboutus>
            </div>
            <div className="absolute left-0 mt-60">
              <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="transform translate-x-32">
                <div className="w-72 h-80 p-5 px-8 bg-black rounded-3xl border-2 border-black opacity-55">
                  <h3 className="text-5xl font-bold text-white py-8">
                    <a
                      href="/program"
                      className="transition ease-in-out hover:text-white/80"
                    >
                      Latest Program
                    </a>
                  </h3>
                  <div className="p-10">
                    <PrettyButton
                      text="Read More"
                      link="https://www.google.com"
                      className="relative z-10"
                    ></PrettyButton>
                  </div>
                </div>
              </div>
              <div className="pl-20">
                <Image
                  src="/images/ahcprogram 3.png"
                  width={600}
                  height={600}
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        {/* organization chart */}
        <section>
          <div className="mt-40">
            <Organization></Organization>
          </div>
        </section>
      </main>
      {/* just a comment */}
    </section>
  );
}

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
    const handleScroll = () => {    //determine heroText position
      const heroTextSection = heroTextSectionRef.current;
      const catImage = catImageRef.current;

      if (heroTextSection && catImage) {
        const heroTextBottom = heroTextSection.getBoundingClientRect().bottom;  //detect HeroText bottom position

        if (heroTextBottom <= 0) { //detect current position
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
              <button className="text-center">
                <div className="text-wrap w-36 h-40 flex flex-col text-xl font-bold shadow p-6 bg-[#FD775D] absolute left-0">
                  <h3 className="text-2xl font-bold text-black py-4">
                    <a
                      href="/donation"
                      className="transition ease-in-out hover:text-white/80"
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
                    className="object-contain  left-20  top-[200px] mt-[4rem] z-10 md:fixed "
                  />
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center text-center mt-20 ">
              <HeadingAboutus text={"About Us"}></HeadingAboutus>
            </div>
            <div className="absolute left-0">
              <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover mb-1"
              />
            </div>
            <div className="flex flex-col gap-20 justify-center items-center animate-fade-down">
              <div className="flex flex-col justify-center items-center w-[64rem] h-auto">
                <div className="text-wrap w-64 flex flex-col items-center justify-center text-xl font-bold mx-5 rounded-3xl shadow p-6 bg-[#FD775D] border-2  absolute top mb-24">
                  <Heading text={"Introduction"}></Heading>
                </div>
                <p className="text-wrap text-center leading-8 text-xl font-bold mx-5 rounded-3xl border-1 shadow p-20 px-6 bg-[#ffe6e1] border-2  mt-28">
                  The Abu Hurairah Club aims to give all homeless and abandoned
                  cats and kittens a chance of survival and new home
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[64rem] h-auto">
                <div className="text-wrap w-64 flex flex-col items-center justify-center text-xl font-bold mx-5 rounded-3xl shadow p-6 bg-[#FD775D] border-2  absolute top mb-40 ">
                  <Heading text={"Our Mission"}></Heading>
                </div>
                <p className="text-wrap text-center leading-8 text-xl font-bold mx-5 rounded-3xl border-1 shadow p-20 px-6 bg-[#ffe6e1] border-2  mt-20">
                  Our mission is to be the rescuer of the animals in IIUM by
                  volunteering and guide other people to help animals in need.
                  Showing mercy and share the love towards animals which is also
                  the creations of Allah swt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stories */}
        <section>
          <div>
            <div className="flex flex-col justify-center items-center text-center mt-20">
              <HeadingAboutus text={"Activities"}></HeadingAboutus>
            </div>
            <div className="flex flex-row items-center m-40 gap-1 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <Image
                src="/images/ahcstory1.png"
                width={400}
                height={400}
                className="mx-20 w-[450px] h-[400px] object-contain"
              ></Image>
              <p className="text-xl text-black p-10">
                Dedicated to protecting the rights and well-being of cats.
                Members work to ensure cats receive proper care and respect,
                promoting ethical standards among cat owners, breeders, and
                shelters. Through campaigns and community engagement, the club
                aims to create a safe and happy world for all cats.
              </p>
            </div>
            <div className="flex flex-row items-center m-48 gap-24 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <p className="text-xl text-black p-10">
                Operates a network of foster homes and works with local shelters
                to find permanent homes for rescued cats. Through adoption fairs
                and online platforms, the Cat Club connects cats in need with
                caring families, ensuring each cat finds a loving home.
              </p>
              <Image
                src="/images/ahcstory2.png"
                width={400}
                height={400}
                className=" w-[450px] h-[400px] object-contain"
              ></Image>
            </div>
            <div className="flex flex-row items-center m-48 gap-10 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <Image
                src="/images/image-3.png"
                width={400}
                height={400}
                className="mx-20 w-[400] h-[400px] object-contain"
              ></Image>
              <p className="text-xl text-black p-10">
                Raising awareness about feline issues is a key part of the Cat
                Club's mission. The club organizes educational programs to
                inform the public about responsible cat ownership, the benefits
                of spaying and neutering, and the dangers of declawing. Through
                workshops and social media, the club shares knowledge about
                common health and behavioral issues, providing resources to help
                cat owners offer the best care possible.
              </p>
            </div>
          </div>
        </section>

        {/* activitites */}
        <section className="my-20 flex justify-center w-screen h-screen bg-red-300">
          <div className="flex flex-col justify-center items-center text-center">
            <Heading text={""}></Heading>
            <div className=" md:lg:grid md:lg:grid-cols-3 sm:grid-cols-2 gap-10 m-10">
              {/* change cols number here */}
              <ActivityCard
                activityDesc={"Saving Cats with Care and Compassion"}
                activityImage={
                  <Image
                    src="/images/rescue.png"
                    width={150}
                    height={150}
                    className=""
                  ></Image>
                }
                activityTitle={"Cat Rescue"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Educating IIUM community about responsible pet ownership and animal welfare with volunteers."
                }
                activityImage={
                  <div className="">
                    <Image
                      src="/images/volunteer1.png"
                      width={150}
                      height={150}
                      className=""
                    ></Image>
                  </div>
                }
                activityTitle={"Awareness and Volunterism"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Bringing new life to cats through open adoption initiatives."
                }
                activityImage={
                  <Image
                    src="/images/catAdoption.png"
                    width={150}
                    height={150}
                    className=""
                  ></Image>
                }
                activityTitle={"Cat Adoption"}
              ></ActivityCard>
            </div>
          </div>
        </section>

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
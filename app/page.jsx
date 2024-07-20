//main page
"use client";

import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import Image from "next/image";
import Organization from "./components/Organization";
import HeroText from "./components/HeroText";
import HeadingAboutus from "./components/HeadingMain";
import PrettyButton from "./components/PrettyButton";
import {createClient} from "contentful";
import LatestProgram from "./components/LatestProgram";

export default async function page() {

  const client = await createClient({
    space : process.env.CONTENTFUL_SPACE_ID,
    environment : 'master',
    accessToken : process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  return (
    <section>
      <main>
        {/* heroText */}
      <HeroText></HeroText>
        {/* intro and mission  */}
        <section className="py-12">
            <div className="absolute left-0">
              <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover mb-1"
              />
            </div> 
            <div className="flex flex-col gap-20 justify-center items-center animate-fade-down">
              <div className="flex flex-col justify-center items-center mt-14 h-auto ">
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
        </section>

        {/* Stories */}
        <section>
          <div className="mt-20">
            {/* first story */}
            <div className="z-0 absolute">
              <ActivityCard
                activityImage={
                  <Image
                    src="/images/story2.png"
                    width={400}
                    height={400}
                    className="object-contain absolute z-0  "
                    alt=""
                  />
                }
                activityImage2={
                  <Image
                    src="/images/story1.png"
                    width={400}
                    height={400}
                    className="object-contain absolute z-0 mt-[13rem] ml-20 "
                    alt=""

                  />
                }
                Symbol={
                  <Image
                    src="/images/volunteer1.png"
                    width={120}
                    height={120}
                    className="object-contain absolute bg-[#FFD878] rounded-[2rem] "
                    alt=""

                  />
                }
                activityTitle="AWARENESS AND VOLUNTERISM"
                activityDesc={
                  <p>
                    Raising awareness about feline issues is a key part of the
                    Cat Club's mission. The club organizes educational programs
                    to inform the public about responsible cat ownership, the
                    benefits of spaying and neutering, and the dangers of
                    declawing. Through workshops and social media, the club
                    shares knowledge about common health and behavioral issues,
                    providing resources to help cat owners offer the best care
                    possible.
                  </p>
                }
              ></ActivityCard>
            </div>
            {/* second story */}
            <div className="flex right-0 z-10 absolute mt-[34rem]">
              <div className="flex flex-row bg-[#F6E6B4] w-[65rem]  h-[36rem] rounded-l-[3.5rem] ">
                <div className="flex flex-col ml-[8rem]">
                  {/* the logo */}
                  <div className="flex flex-row items-center ">
                    <div className=" bg-[#FFD878] rounded-[2rem] mt-12 flex flex-row">
                      <Image
                        src="/images/rescue.png"
                        width={120}
                        height={120}
                        className="object-contain   "
                        alt=""

                      />
                    </div>
                    <p className=" mt-[3rem] ml-7 text-[29.36px] font-bold ">
                      CAT RESCUE
                    </p>
                  </div>
                  <p className="mt-5 w-[24rem] text-[21.21px] text-right">
                    operates a network of foster homes and works with local
                    shelters to find permanent homes for rescued cats. Through
                    adoption fairs and online platforms, the Cat Club connects
                    cats in need with caring families, ensuring each cat finds a
                    loving home.
                  </p>
                </div>
                <div className="m-12">
                  <Image
                    src="/images/catrescue1.png"
                    width={400}
                    height={400}
                    className="object-contain absolute z-0  "
                    alt=""
                  />
                  <Image
                    src="/images/catrescue2.png"
                    width={250}
                    height={250}
                    className="object-contain absolute  mt-[11rem] ml-28  "
                    alt=""
                    
                  />
                </div>
              </div>
            </div>
            {/* third story */}
            <div className="z-20 absolute mt-[65rem]">
              <ActivityCard
                activityImage={
                  <Image
                    src="/images/adoptme1.png"
                    width={300}
                    height={300}
                    className="object-contain absolute z-0 ml-[6rem] "
                    alt=""
                  />
                }
                activityImage2={
                  <Image
                    src="/images/adoptme2.png"
                    width={300}
                    height={300}
                    className="object-contain absolute z-0 mt-[14rem] ml-[1rem] "
                    alt=""

                  />
                }
                Symbol={
                  <Image
                    src="/images/catAdoption.png"
                    width={120}
                    height={120}
                    className="object-contain absolute bg-[#FFD878] rounded-[2rem] "
                    alt=""
                  />
                }
                activityTitle="CAT ADOPTION"
                activityDesc={
                  <p>
                    dedicated to protecting the rights and well-being of cats.
                    Members work to ensure cats receive proper care and respect,
                    promoting ethical standards among cat owners, breeders, and
                    shelters. Through campaigns and community engagement, the
                    club aims to create a safe and happy world for all cats.
                  </p>
                }
              ></ActivityCard>
            </div>
          </div>
        </section>

        {/* thee card, adoption, awareness... */}
        <section className="my-20 flex justify-center w-screen h-screen "></section>

        {/* program */}
        <section>
          <div className="my-50 px-40 mt-[67rem]">
            <div className="flex flex-col justify-center items-center text-center p-10 m-20">
              <HeadingAboutus text={"PROGRAM"}></HeadingAboutus>
            </div>
            <div className="absolute left-0 mt-60">
              <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover"
                alt=""
              />
            </div>

            {/* LatestProgram */}
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
                      link="/program"
                      className="relative z-10"
                      alt=""
                    ></PrettyButton>
                  </div>
                </div>
              </div>
              <div className="pl-20">
              {client
                  .getEntries({ 
                    content_type: "program",
                    limit: 1 //auto get the latest publish content
                  })
                  .then((entries) =>
                    entries.items.map((entry) => (
                  <LatestProgram
                    key={entry.fields.id}
                    title={entry.fields.title}
                    thumbnail={entry.fields.thumbnail?.fields?.file?.url || ''}
                    desc={entry.fields.desc}
                    slug={entry.fields.slug}
                  />
                )))}
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

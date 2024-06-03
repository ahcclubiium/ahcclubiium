//main page 
import HeroText from "./components/HeroText";
import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import { FaCampground } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";
import { FaBookReader } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";

export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20	bg-black via-white to-sky-300">
          <HeroText></HeroText>
        </section>
        <section className="my-10">
          <div className="flex flex-col justify-center items-center  text-center">
            <Heading text={"Activities"}></Heading>
            <div className=" md:lg:grid md:lg:grid-cols-3 sm:grid-cols-2 gap-10 m-10">
              {/* change cols number here */}
              <ActivityCard
                activityDesc={
                  "Educating students and IIUM community about responsible pet ownership and animal warfare"
                }
                activityImage={<FaBullhorn></FaBullhorn>}
                activityTitle={"Workshop and Talk"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Educating students and IIUM community about responsible pet ownership and animal warfare"

                }
                activityImage={<FaProjectDiagram></FaProjectDiagram>}
                activityTitle={"Projects"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Educating students and IIUM community about responsible pet ownership and animal warfare"
                }
                activityImage={<FaCampground></FaCampground>}
                activityTitle={"Bootcamp"}
              ></ActivityCard>

            </div>
          </div>
        </section>
        <section className="py-12">
      <div className="lg:px-64 ">
        <div className="flex flex-col gap-8 justify-center animate-fade-down">
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Introduction"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
              The Abu Hurairah Club aims to give all homeless and abandoned cats and kittens a chance of survival and new home
            </p>
          </div>
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Our Mission"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700 m-3 list-decimal">
              Our mission is to be the rescuer of the animals in IIUM by volunteering and guide  other people to help animals in need. Showing mercy and share the love towards animals which is also the creations of Allah swt.
            </p>
          </div>
        </div>
      </div>
    </section>
        
      </main>
      {/* just a comment */}
    </section>
  );
}

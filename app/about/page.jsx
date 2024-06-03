import Heading from "../components/Heading";
import Image from "next/image";

export default function about() {
  return (
    <section className="py-12">
      <div className=" lg:px-64 ">
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
              Our mission is to be the rescuer of the animals in IIUM by volunteering and guide  other people to help animals in need. Showing mercy and share the love towards  animals which is also the creations of Allah swt.
            </p>
          </div>
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Vision"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
              Motion-U Club envisions a future where aspiring technopreneurs are
              equipped with a diverse range of IT skills, including web and
              mobile application development, among others, enabling them to
              create lucrative business opportunities. Complementing these
              technical competencies, Motion-U Club also instills robust
              business skills, fostering a holistic approach to
              entrepreneurship. Through mentorship and a supportive community,
              Motion-U Club aims to cultivate innovative leaders who seamlessly
              integrate technical expertise with strategic thinking, poised to
              revolutionize industries and drive impactful change in the dynamic
              landscape of technology-driven entrepreneurship.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 bg-gradient-to-br from-sky-300 via-white to-sky-200 w-full py-10">
        <Heading text={"Motion-U Club Members 2023/2024"}></Heading>
        <div className="flex justify-center mt-5 mx-5">
          <Image
            src="/images/org_chart.png"
            width={1200}
            height={1200}
            className="rounded-2xl border-4 border-sky-700 shadow-lg "
          ></Image>
        </div>
      </div>
    </section>
  );
}

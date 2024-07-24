//tkde impact
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
              Our mission is to be the rescuer of the animals in IIUM by volunteering and guide  other people to help animals in need. Showing mercy and share the love towa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

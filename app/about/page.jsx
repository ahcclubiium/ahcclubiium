import Heading from "../components/Heading";
import Image from "next/image";

export default function about() {
  return (
    <section className="py-12">
      <div className=" lg:px-64 ">
        <div className="flex justify-center animate-fade-down">
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Background"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
              Motion-U Club is a Special Interest Group (SIG) based in Kulliyyah
              of Information and Communication Technology (KICT) of
              International Islamic University Malaysia (IIUM). The Motion-U
              Club fosters a vibrant community where technology enthusiasts
              converge to innovate and embark on entrepreneurial journeys.
              Through workshops, talks, and hands-on projects, members explore
              the intersection of technology and entrepreneurship, equipped with
              skills and networks to shape the future of innovation and make
              meaningful impact.
            </p>
          </div>
        </div>
        <div className="mx-5 flex flex-col md:lg:flex-row justify-center md:lg:xl:h-64 gap-10 mt-10 text-center animate-fade-down animate-delay-200 ">
          <section className="rounded-2xl shadow  shadow-blue-300 lg:w-1/2 p-5 h-full">
            <div>
              <Heading text={"Mission"}></Heading>
              <p className="text-wrap mt-3 leading-8 text-justify text-gray-700 m-3">
                Empower KICT students at IIUM Malaysia to become innovative
                technopreneurs, leveraging their skills in information and
                communication technology. Through education and collaboration,
                we prepare them to drive positive change and contribute to the
                global tech ecosystem.
              </p>
            </div>
          </section>
          <section className="rounded-xl shadow  shadow-blue-300 lg:w-1/2 p-5  h-full ">
            <div>
              <Heading text={"Vision"}></Heading>
              <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
                To cultivate a vibrant community within KICT, where students are
                inspired to harness their technological expertise for
                entrepreneurial endeavors. We aspire to nurture a generation of
                forward-thinking technopreneurs who lead with integrity,
                creativity, and a commitment to Islamic values.
              </p>
            </div>
          </section>
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

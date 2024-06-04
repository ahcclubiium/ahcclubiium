//main page
import HeroText from "./components/HeroText";
import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import Image from "next/image";


export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20	bg-black via-white to-sky-300">
          <HeroText></HeroText>
        </section>
        <section>
          <div>
            <div className="flex flex-row items-center m-48 gap-24 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <Image
                src="/images/ahcstory1.png"
                width={400}
                height={400}
                className="w-[450px] h-[400px] object-contain"
              ></Image>
              <p className="text-xl text-black p-10">
                dedicated to protecting the rights and well-being of cats.
                Members work to ensure cats receive proper care and respect,
                promoting ethical standards among cat owners, breeders, and
                shelters. Through campaigns and community engagement, the club
                aims to create a safe and happy world for all cats.
              </p>
            </div>
            <div className="flex flex-row items-center m-48 gap-24 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <p className="text-xl text-black p-10">
                operates a network of foster homes and works with local shelters
                to find permanent homes for rescued cats. Through adoption fairs
                and online platforms, the Cat Club connects cats in need with
                caring families, ensuring each cat finds a loving home.
              </p>
              <Image
                src="/images/ahcstory2.png"
                width={400}
                height={400}
                className="w-[450px] h-[400px] object-contain"
              ></Image>
            </div>
            <div className="flex flex-row items-center m-48 gap-24 md:lg:grid md:lg:grid-cols-2 sm:grid-cols-2 ">
              <Image
                src="/images/ahcstory2.png"
                width={400}
                height={400}
                className="w-[450px] h-[400px] object-contain"
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
        <section className="my-10">
          <div className="flex flex-col justify-center items-center  text-center">
            <Heading text={"Activities"}></Heading>
            <div className=" md:lg:grid md:lg:grid-cols-3 sm:grid-cols-2 gap-10 m-10">
              {/* change cols number here */}
              <ActivityCard
                activityDesc={"Saving Cats with Care and Compassion"}
                activityImage={
                  <Image
                    src="/images/rescue.jpg"
                    width={70}
                    height={70}
                    class=""
                  ></Image>
                }
                activityTitle={"Cat Rescue"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Educating IIUM community about responsible pet ownership and animal welfare with volunteers."
                }
                activityImage={
                  <Image
                    src="/images/volunteer1.png"
                    width={50}
                    height={50}
                    class=""
                  ></Image>
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
                    width={70}
                    height={70}
                    class=""
                  ></Image>
                }
                activityTitle={"Cat Adoption "}
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
                  The Abu Hurairah Club aims to give all homeless and abandoned
                  cats and kittens a chance of survival and new home
                </p>
              </div>
              <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
                <div className="text-center">
                  <Heading text={"Our Mission"}></Heading>
                </div>
                <p className="text-wrap mt-3 leading-8 text-justify text-gray-700 m-3 list-decimal">
                  Our mission is to be the rescuer of the animals in IIUM by
                  volunteering and guide other people to help animals in need.
                  Showing mercy and share the love towards animals which is also
                  the creations of Allah swt.
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

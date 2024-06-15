//main page
import HeroText from "./components/HeroText";
import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import Image from "next/image";
import Organization from "./components/Organization";
import HeroText2 from "./components/HeroText2";


export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20">
          <HeroText2></HeroText2>
        </section>

        {/* intro and mission  */}
        <section className="py-12">
          <div className="lg:px-64">
            <div className="flex flex-col justify-center items-center text-center mt-20">
              <Heading text={"About Us"}></Heading>
            </div>
          <div className="absolute left-0">
                <Image
                  src="/images/CAT PAW 1.png"
                  width={800}
                  height={800}
                  className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-8 justify-center items-center animate-fade-down">
              <div className="flex flex-col justify-center items-center">
                <div className="text-wrap w-64 flex flex-col items-center justify-center text-xl font-bold mx-5 rounded-3xl shadow p-6 bg-[#FD775D] border-2 border-black absolute top mt-8">
                  <Heading text={"Introduction"}></Heading>
                </div>
                <p className="text-wrap text-center leading-8 text-xl font-bold mx-5 rounded-3xl border-1 shadow p-20 px-6 bg-[#ffe6e1] border-2 border-black mt-64">
                  The Abu Hurairah Club aims to give all homeless and abandoned
                  cats and kittens a chance of survival and new home
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-wrap w-64 flex flex-col items-center justify-center text-xl font-bold mx-5 rounded-3xl shadow p-6 bg-[#FD775D] border-2 border-black absolute top">
                  <Heading text={"Our Mission"}></Heading>
                </div>
                <p className="text-wrap text-center leading-8 text-xl font-bold mx-5 rounded-3xl border-1 shadow p-20 px-6 bg-[#ffe6e1] border-2 border-black mt-64">
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
              <Heading text={"Activities"}></Heading>
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
                    width={70}
                    height={70}
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

        {/* organization chart */}
        <section>
          <Organization></Organization>
        </section>
      </main>
      {/* just a comment */}
    </section>
  );
}

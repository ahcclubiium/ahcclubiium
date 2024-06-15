import Heading from "../components/Heading";
import Image from "next/image";
import PrettyButton from "../components/PrettyButton";

export default function donation() {
  return (
    <div className="bg-gray-900 text-white py-20 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-up animate-ease-out">
          <h1 className="text-5xl font-extrabold text-white text-nowrap lg:text-8xl md:text-9xl">
            OPEN FOR DONATION
          </h1>
          {/* <>buat ke kiri </> */}
          
          <PrettyButton
            text="Donate Here"
            link="https://www.google.com"
            className="mt-12"
          ></PrettyButton>
          {/* <>Buat ke kanan</> */}
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Heading text="Our Mission" lightFont />
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              The Abu Hurairah Club is a non-profit organization dedicated to
              making a positive impact on the lives of those in need. Our
              mission is to provide essential resources, support, and care to
              underprivileged individuals and communities, empowering them to
              build a better future.
            </p>
          </div>
          <div>
            <Heading text="How Your Donation Helps" lightFont />
            <ul className="text-gray-400 mt-6 text-lg leading-relaxed space-y-4">
              <li>- Distribute food and supplies to families in need</li>
              <li>- Provide access to quality education and healthcare</li>
              <li>- Invest in sustainable community development projects</li>
              <li>- Support vulnerable populations, such as orphans and the elderly</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 lg:mt-32">
          <Heading text="Our Impact" lightFont />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            <div>
              <h3 className="text-3xl font-bold">50,000+</h3>
              <p className="text-gray-400 mt-2">Lives Impacted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">$2.5M+</h3>
              <p className="text-gray-400 mt-2">Funds Raised</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-400 mt-2">Community Projects</p>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 text-center">
          <Heading text="Join Us in Making a Difference" lightFont />
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Your contribution, no matter how small, can have a profound impact on
            the lives of those in need. Together, we can build a more
            compassionate and equitable world.
          </p>
          
        </div>
      </div>
    </div>
  );
}
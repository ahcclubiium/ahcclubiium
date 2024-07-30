import Heading from "../components/Heading";
import Image from "next/image";
import PrettyButton from "../components/PrettyButton";
import Donation from "../components/Donation";

export default function donation() {
  return (
    <div className="text-white">
      <Donation></Donation>
      <div className="">
        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-20 text-wrap leading-8 text-xl font-bold mx-20 rounded-xl shadow p-10 px-10 bg-[#FFD878] left-0">
            <Heading text="Monetory Donations" lightFont />
            <Image
                src="/images/image 34.png"
                width={400}
                height={400}
                className="mx-20 w-[400] h-[400px] object-contain m-10"
            ></Image>
            <p className="text-gray-900 mt-6 text-lg leading-relaxed">
            Simply scan this QR code with your mobile device to be taken directly to our donation portal. It's quick, easy, and secure.
            </p>
          </div>

          <div className="">
          <div className="flex flex-col justify-center items-center text-wrap leading-8 text-xl font-bold mx-20 rounded-xl shadow p-10 px-10 bg-[#FFD878] top-60 absolute right-20 w-96 h-auto mt-96">
            <Heading text="NON-Monetary Donations" lightFont />
            <ul className="text-gray-900 mt-6 text-lg leading-relaxed space-y-4">
              <li>We greatly appreciate donations of supplies and other forms of support. If you would like to contribute in ways other than money, please contact us:</li>
              <li>Email :</li>
              <li>Phone :</li>
              <li>Example need of supply:-</li>
              <li>- Cat food (wet and dry)</li>
              <li>- Litter and litter boxes</li>
              <li>- Toys and blankets</li>
              <li>- Medical supplies (e.g., flea treatment, dewormers)</li>
            </ul>
          </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center lg:mt-32 text-center bg-[#B89670]">
          <div className="mt-20">
            <Heading text="THANK YOU TO OUR DONORS!" lightFont />
          </div>
          <p className="text-white mt-6 text-lg leading-relaxed">
          We are incredibly grateful for the generous donations we received. Here are some of the wonderful contributions that have made a difference:
          </p>
          <Image
            src="/images/Frame 1.png"
            width={400}
            height={400}
            className="mx-20 w-[400] h-[400px] object-contain m-10"
          ></Image>
          <p className="text-xs">
          *Caption: "Thank you, [Donor's Name], for the generous donation of cat food and toys!"*
          </p>
          <Image
            src="/images/image 28.png"
            width={400}
            height={400}
            className="mx-20 w-[400] h-[400px] object-contain m-10"
          ></Image>
          <p className="text-xs mb-20">
          *Caption: "A big thank you to [Donor's Name] for the cozy blankets and litter boxes!"*
          </p>
        </div>
      </div>
    </div>
  );
}


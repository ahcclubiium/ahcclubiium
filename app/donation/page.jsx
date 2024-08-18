import Heading from "../components/Heading";
import Image from "next/image";
import PrettyButton from "../components/PrettyButton";
import Donation from "../components/Donation";

export default function donation() {
  return (
    <div className="text-white">
      <Donation></Donation>
      <div className="">
        {/* the ways to donate section */}
        <div className="flex flex-row ml-10 mt-20 items-center justify-center">
          <h1 className="text-[#B99771] text-[5rem] font-semibold mr-10">
            {" "}
            How to <br /> donate
          </h1>
          {/* first container */}
          <div className="bg-[#FFD878] text-black h-[20rem] z-0 relative ">
            <p className="p-10">
              To make a donation, <br /> simply contact us at the number below
              or use <br /> the bank details provided
            </p>
          </div>
          {/* sec container */}
          <div className="bg-[#F6F2CC] text-black h-fit mt-[6.8rem] p-4 z-10 absolute ml-[23rem]">
            <p>Phone: 123-456-7890</p>
            <p>Bnak Details:</p>
            <p>Bank Name: 123-456-7890</p>
            <p>Account Number: </p>
            <p>Account Name: </p>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center lg:mt-32 text-center bg-[#B89670]">
          <p className="text-white mt-10 font-semibold text-[3rem]">
            THANK YOU TO OUR DONORS!
          </p>
          <p className="text-white mt-6 text-lg leading-relaxed">
            We are incredibly grateful for the generous donations we received.
            Here are <br /> some of the wonderful contributions that have made a
            difference:
          </p>
          <Image
            src="/images/Frame 1.png"
            width={400}
            height={400}
            className="mx-20 w-[400] h-[400px] object-contain m-10"
          ></Image>
          <p className="text-xs">
            *Caption: "Thank you, [Donor's Name], for the generous donation of
            cat food and toys!"*
          </p>
          <Image
            src="/images/image 28.png"
            width={400}
            height={400}
            className="mx-20 w-[400] h-[400px] object-contain m-10"
          ></Image>
          <p className="text-xs mb-20">
            *Caption: "A big thank you to [Donor's Name] for the cozy blankets
            and litter boxes!"*
          </p>
        </div>
      </div>
    </div>
  );
}

import Heading from "../components/Heading";
import Image from "next/image";
import PrettyButton from "../components/PrettyButton";
import Donation from "../components/Donation";

export default function donation() {
  return (
    <div className="text-white ">
      <Donation></Donation>
      <div className="">
        {/* the ways to donate section */}
        <div className="flex flex-row ml-[18rem] mt-20">
          <h1 className="text-[#B99771] text-[3rem] font-semibold mr-14 hidden md:block">
            {" "}
            How to donate
          </h1>
          {/* first container */}
          <div className="bg-[#FFD878] text-black h-[22rem] z-0 relative w-[29rem] hidden md:block ">
            <p className="p-10">
              To make a donation, <br /> simply contact us at the number below
              or use <br /> the bank details provided
            </p>
          </div>
          {/* sec container */}
          <div className="bg-[#F6F2CC] text-black h-fit mt-[9rem] p-4 z-10 absolute ml-[29rem] shadow-2xl hidden md:block">
            <p>Phone: 123-456-7890</p>
            <p>Bank Details:</p>
            <p>Bank Name: Maybank</p>
            <p>Account Number: 5622 0965 6727</p>
            <p>Account Name: Persatuan Kebajikan Haiwan Abu Hurairah </p>
          </div>
        </div>
{/* Phone View */}
<div className="block md:hidden relative px-4 sm:px-6 lg:px-8 mb-10">
  {/* Heading */}
  <h1 className="text-[#B99771] text-3xl font-semibold mb-8 md:mb-0 md:text-[3rem]">
    How to donate
  </h1>
  
  {/* Containers */}
  <div className="flex ">
    {/* First container */}
    <div className="bg-[#FFD878] text-black   p-10 relative z-0">
      <p className="text-sm md:text-base">
        To make a donation use  the bank details provided
      </p>
    </div>

    {/* Second container */}
    <div className="bg-[#F6F2CC] text-black w-full p-4 rounded-lg shadow-2xl">
      <p className="text-sm md:text-base">Phone: 123-456-7890</p>
      <p className="text-sm md:text-base">Bank Details:</p>
      <p className="text-sm md:text-base">Bank Name: Maybank</p>
      <p className="text-sm md:text-base">Account Number: 5622 0965 6727</p>
      <p className="text-sm md:text-base">Account Name: Persatuan Kebajikan Haiwan Abu Hurairah</p>
    </div>
  </div>
</div>

        <div className=" flex flex-col justify-center items-center lg:mt-24 text-center bg-[#B89670]">
          <p
            className="text-white mt-10 font-semibold text-[3rem]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
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
            className="mx-20 w-[400] h-[400px] object-contain m-10 "
          ></Image>
          <p className="text-xs">
            Thank you, [Donor's Name], for the generous donation of
            cat food and toys!
          </p>
          <Image
            src="/images/image 28.png"
            width={400}
            height={400}
            className="mx-20 w-[400] h-[400px] object-contain m-10"
          ></Image>
          <p className="text-xs mb-20">
            A big thank you for the cozy blankets
            and litter boxes!"
          </p>
        </div>
      </div>
    </div>
  );
}

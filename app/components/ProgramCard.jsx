import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ProgramCard({ title, description, image }) {
  return (
    <div className="rounded-2xl shadow-2xl w-[40rem]  bg-white m-10">
      {/* <Image src={image} height={1100} width={1500} className="rounded-t-2xl"></Image> */}
      <div className="flex justify-center py-5 my-3">
        <img src={image} className="w-[35rem] " />
      </div>
      <div className="p-3 py-4 pb-12 px-24 flex flex-col gap-3 justify-center">
        <h2 className="text-4xl text-black font-bold">{title}</h2>
        <p className="text-gray-500 text-justify text-xl">{description}</p>
        
      </div>
    </div>
  );
}

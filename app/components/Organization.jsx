import Image from "next/image";
import HeadingAboutus from "./HeadingMain";

export default function Organization() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-20 text-[83px] w-[25rem] text-center flex">
        <HeadingAboutus
          text={"ORGANISATION CHART"}
          className="mt-40 m-50"
        ></HeadingAboutus>
      </div>

      <div className="w-full flex justify-center mb-48">
        <Image
          src="/images/OrganizationChart.png"
          width={1400}
          height={1400}
          className="w-full h-auto max-w-5xl object-contain"
          alt="Organization Chart"
        ></Image>
      </div>
    </div>
  );
}

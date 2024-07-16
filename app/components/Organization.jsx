import Image from "next/image";
import HeadingAboutus from "./HeadingMain";
export default function Organization() {
    return (
      <div className="flex justify-center flex-col items-center">
        {/* <h1 className="text-center font-bold text-3xl mt-40 m-10">
          Organization Chart
        </h1> */}
        <div className="m-20 text-[83px] w-[25rem] text-center flex">
          <HeadingAboutus
            text={"ORGANISATION CHART"}
            className="mt-40 m-50 "
          ></HeadingAboutus>
        </div>

        <Image
          src="/images/OrganizationChart.png"
          width={1400}
          height={1400}
          className="mx-20 w-screen h-[400px] object-contain mb-48"
          alt=""
        ></Image>
      </div>
    );
}
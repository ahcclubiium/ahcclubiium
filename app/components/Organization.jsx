import Image from "next/image";
import HeadingAboutus from "./HeadingMain";
export default function Organization() {
    return (
      <div className="flex justify-center flex-col items-center">
        {/* <h1 className="text-center font-bold text-3xl mt-40 m-10">
          Organization Chart
        </h1> */}
        <HeadingAboutus text={"Organisation Chart" } className="mt-40 m-50"></HeadingAboutus>

        <Image
          src="/images/OrganizationChart.png"
          width={400}
          height={400}
          className="mx-20 w-max h-[400px] object-contain mb-44"
        ></Image>
      </div>
    );
}
import Image from "next/image";

export default function Organization() {
    return (
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center font-bold text-3xl m-24 ">
          Organization Chart
        </h1>
        <Image
          src="/images/OrganizationChart.png"
          width={400}
          height={400}
          className="mx-20 w-max h-[400px] object-contain mb-14"
        ></Image>
      </div>
    );
}
import Image from "next/image";

export default function ActivityCard({ activityImage, activityTitle, activityDesc }) {
  return (
    <div className="flex flex-col items-center justify-center w-64 space-y-5">
      <div className="text-6xl text-sky-500">
        {activityImage}
      </div>
      <h3 className="text-xl font-bold text-black">
        {activityTitle}
      </h3>
      <p className="text-gray-500">
        {activityDesc}
      </p>
    </div>
  );
}
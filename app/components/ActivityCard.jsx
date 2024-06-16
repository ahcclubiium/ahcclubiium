export default function ActivityCard({ activityImage, activityTitle, activityDesc }) {
  return (
    <div className="flex flex-col items-center justify-center w-72 space-y-12 p-5 px-8 bg-[#FD775D] rounded-3xl border-2 border-black">
      <div className="text-6xl">
        {activityImage}
      </div>
      <h3 className="text-xl font-bold">
        {activityTitle}
      </h3>
      <p className="text-sm">
        {activityDesc}
      </p>  
    </div>
  );
}
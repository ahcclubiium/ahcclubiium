export default function ActivityCard({
  activityImage,
  activityImage2,
  Symbol,
  activityTitle,
  activityDesc,
}) {
  return (
    <div className="flex flex-row bg-[#958C81] w-[75rem]  h-[36rem] rounded-r-[3.5rem]">
      <div className="m-12">
        {activityImage}
        {activityImage2}
      </div>
      <div className="flex flex-col">
        {/* the logo and title */}
        <div className="flex flex-row items-center  ml-[30rem] w-fit h-[6rem]">
          <div className=" ">{Symbol}</div>
          <div className="ml-[9rem] mt-[6rem] text-[29.36px] font-bold w-[17rem] ">
            {activityTitle}
          </div>
        </div>
        <div className="ml-[32rem] mt-20 w-[29rem] text-[21.21px] tracking-wide">
          {activityDesc}
        </div>
      </div>
    </div>
  );
}

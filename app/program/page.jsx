import React from "react";
import Image from "next/image";
import ProgramCard from "../components/ProgramCard";

const Program = () => {
  return (
    <div>
      <div className="h-full bg-[#FEB7A9] ">
        <h2
          className={"text-5xl text-[#8B2813] font-extrabold ml-64 py-10 z-20"}
        >
          Program
        </h2>
        <div className="absolute left-0">
          <Image
            src="/images/catpow1.png"
            width={400}
            height={400}
            className="object-contain z-10"
          />
        </div>
        <div className="absolute right-0">
            <Image
              src="/images/CAT PAW 4.png"
              width={600}
              height={600}
              className="object-contain z-10"
            />
          </div>
        <div className="grid grid-cols-2 mx-[5rem] relative z-20">
          <div className="">
            <ProgramCard
              image={"/images/animal-loving-carnival.jpeg"}
              title={"national-cat-show-2023"}
              description={
                "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
              }
            ></ProgramCard>
          </div>
          <div>
            <ProgramCard
              image={"/images/animal-loving-carnival.jpeg"}
              title={"national-cat-show-2023"}
              description={
                "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
              }
            ></ProgramCard>
          </div>
          <div>
            <ProgramCard
              image={"/images/animal-loving-carnival.jpeg"}
              title={"national-cat-show-2023"}
              description={
                "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
              }
            ></ProgramCard>
          </div>
          <div>
            <ProgramCard
              image={"/images/animal-loving-carnival.jpeg"}
              title={"national-cat-show-2023"}
              description={
                "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
              }
            ></ProgramCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

// import React from "react";
// import Image from "next/image";
// import ProgramCard from "../components/ProgramCard";

// export default function Program() {
//   return (
//     <div>
//       {/* variety of program section  */}
//       <div className="my-36 bg-[#FEB7A9] ">
//         <h2 className={"text-5xl text-[#8B2813] font-extrabold ml-64 py-10"}>
//           Program
//         </h2>
//         <Image
//           src="/images/catpow1.jpg"
//           width={800}
//           height={800}
//           className="object-cover mb-1"
//         />
//         <div className="flex flex-wrap mx-[7rem] gap-8">
//           <ProgramCard
//             image={"/images/animal-loving-carnival.jpeg"}
//             title={"national-cat-show-2023"}
//             description={
//               "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
//             }
//           ></ProgramCard>
//           <ProgramCard
//             image={"/images/animal-loving-carnival.jpeg"}
//             title={"national-cat-show-2023"}
//             description={
//               "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
//             }
//           ></ProgramCard>
//           <ProgramCard
//             image={"/images/animal-loving-carnival.jpeg"}
//             title={"national-cat-show-2023"}
//             description={
//               "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
//             }
//           ></ProgramCard>
//           <ProgramCard
//             image={"/images/animal-loving-carnival.jpeg"}
//             title={"national-cat-show-2023"}
//             description={
//               "On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️  On 14th March, 2023, a group of students from Shenandoah University came to visit our cat shelter! We really appreciate it and hope to see you again! 😻♥️ "
//             }
//           ></ProgramCard>
//         </div>
//       </div>
//     </div>
//   );
// }

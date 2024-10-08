import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Heading from "./Heading";

export default function BlogPostCard({ id, title, thumbnail, desc }) {
  const imageUrl = thumbnail ? `https:${thumbnail}` : "/default-image.jpg"; // Use a default image or handle the error case

  return (
    <div className="hover:opacity-95 block">
      <div className="rounded-2xl mb-3 w-full relative">
        <Image
          src={imageUrl}
          height={700}
          width={700}
          layout="responsive"
          priority // to resolve LCP warning
          alt={title || "Blog post image"}
          className="rounded-t-2xl object-cover"
        />
        <div className="bg-white hover:opacity-95 rounded-b-2xl mb-3">
          <div className="p-3 py-4">
            <Heading text={title || "No title"} color="black" size={"large"} weight={"bold"} align={"none"} />
            <p className="text-gray-500 text-justify">{desc || ""}</p>
            {/*add truncate in here*/}
            {/* <div className="flex justify-between items-center pt-5">
            <div className="text-blue-500">Read more</div> 
             <div className="text-blue-500">
              <FaArrowRight />
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
}


import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function BlogPostCard({ id, title, thumbnail, desc }) {
  const imageUrl = thumbnail ? `https:${thumbnail}` : "/default-image.jpg"; // Use a default image or handle the error case

  return (
    <a href={"/program/" + id} className="hover:opacity-95">
      <div className="rounded-2xl shadow-xl mb-3">
        <Image
          src={imageUrl}
          height={1100}
          width={1500}
          // layout="responsive"
          // priority  //to resolve LCP warning
          alt={title || "Blog post image"}
          className="rounded-t-2xl"
          
        />
         <div className="bg-white hover:opacity-95 rounded-b-2xl shadow-xl mb-3">
        <div className="p-3 py-4">
          <h2 className="text-2xl text-red-800 font-bold">{title || "No title"}</h2>
          <p className="text-gray-500 text-justify">{desc || "No description"}</p>
          <div className="flex justify-between items-center pt-5">
            <div className="text-blue-500">Read more</div>
            <div className="text-blue-500">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </a>
  );
}

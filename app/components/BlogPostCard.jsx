
"use client"
import { FaArrowRight } from "react-icons/fa";
import styles from "./BlogPostCard.css"; // Import CSS module for styling
import Image from "next/image";

export default function BlogPostCard({ id, title, thumbnail, desc }) {
  const ImageUrl = 'https:' + thumbnail;

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <a href={"/program/" + id} className="hover:opacity-95">
      <div className="rounded-2xl shadow-xl mb-3">
        <Image
        src={ImageUrl}
        height={1100}
        width={1500}
        >
        </Image>
      </div>
    </a>
    // <div className={`${styles.card} hover:opacity-95`}>
    //   <div className={`${styles.cardContainer} shadow-xl mb-3`}>
    //     <div className={`${styles.imageContainer} `}>
    //       <img
    //         src={`https:${thumbnail}`}
    //         alt={title || "Blog post image"}
    //         className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ""}`}
    //         onLoad={handleImageLoad}
    //       />
          
    //     </div>
    //     <div className={`${styles.contentContainer} p-3 py-4`}>
    //       <h2 className="text-2xl text-red-800 font-bold">{title? title : "No title"}</h2>
    //       <p className="text-gray-500 text-justify">{desc ? desc : "No description"}</p>
    //       <div className={`${styles.linkContainer} flex justify-between items-center pt-5`}>
    //         <div className={`${styles.moreText}`}>Read more</div>
    //         <div className={`${styles.arrowIcon}`}>
    //           <FaArrowRight />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}






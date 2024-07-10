'use client'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./BlogPostCard.css"; // Import CSS module for styling

export default function BlogPostCard({ id, title, thumbnail, desc }) {
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <a href={`/program/${id}`} className={`${styles.card} hover:opacity-95`}>
      <div className={`${styles.cardContainer} rounded-2xl shadow-xl mb-3`}>
        <div className={`${styles.imageContainer} rounded-t-2xl`}>
          <img
            src={`https:${thumbnail}`}
            alt={title || "Blog post image"}
            className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ""}`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className={`${styles.contentContainer} p-3 py-4`}>
          <h2 className="text-2xl text-sky-800 font-bold">{title}</h2>
          <p className="text-gray-500 text-justify">{desc}</p>
          <div className={`${styles.linkContainer} flex justify-between items-center pt-5`}>
            <div className={`${styles.moreText}`}>Read more</div>
            <div className={`${styles.arrowIcon}`}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

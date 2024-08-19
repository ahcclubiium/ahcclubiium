import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import LogoImage from "./LogoImage";

const FooterNew = () => {
  return (
    <footer className="w-full bg-[#B89670] text-white border border-t-gray-300 pt-10 flex flex-col items-center justify-center ">
      <div className="w-full max-w-7xl space-y-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex justify-center gap-2 sm:gap-7 font-bold text-xs sm:text-xl">
            <a href="#">Home</a>
            <a href="#">Business</a>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex gap-4 text-xs sm:text-xl">
            <a
              href="https://www.instagram.com/@ahc_iium/"
              className="inline-block text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@ahc_iium"
              className="inline-block text-xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com/ahc_iium"
              className="inline-block text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/ahc.iium/"
              className="inline-block text-xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex gap-2 sm:gap-7 font-bold text-xs sm:text-xl">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sharing Settings</a>
            <a href="#">Web Accessibility</a>
          </div>
          <LogoImage />
        </div>
      </div>

      {/* New Bottom Layer */}
      <div className="w-full h-full bg-[#896E50] text-center text-xs sm:text-sm py-2 mt-7 flex flex-row">
        <p className="font-bold">Powered by Motion-U Club</p>
        <img src="" alt="" />
      </div>
    </footer>
  );
};

export default FooterNew;

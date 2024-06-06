import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"

export default function page() {
  return (
    <section className="text-center flex flex-col flex-grow min-h-screen lg:text-left lg:mx-40 text-gray-700">
      <h1 className="text-3xl lg:text-6xl font-bold text-black inline-block mx-5 mt-10 lg:mt-20">
        Contact us!
      </h1>
      <div className="lg:w-1/2 m-5">
        <div className="flex justify-between my-8">
          <p className="font-semibold">Address</p>
          <p className="text-right">
            Level X, Kuliyyah X
          </p>
        </div>
        <hr />
        <div className="flex justify-between my-8">
          <p className="font-semibold">Get in touch</p>
          <a href="mailto:abuhurairahclub@gmail.com" className="text-right">abuhurairahclub@gmail.com</a>
        </div>
        <hr />
        <div className="flex justify-between my-8">
          <p className="font-semibold">Social media</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ahc_iium/"
              className="inline-block text-xl"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href="https://www.tiktok.com/@ahc_iiumt"
              className="inline-block text-xl"
            >
              <FaTiktok></FaTiktok>
            </a>
            <a
              href="https://twitter.com/ahc_iium"
              className="inline-block text-xl"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="https://www.facebook.com/ahc.iium"
              className="inline-block text-xl"
            >
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

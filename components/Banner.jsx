/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Front from "../assets/Front.png";
import { urlFor } from "../lib/client";

export default function Banner({ bannerData }) {
  return (
    <div className=" p-14 justify-center items-center w-full ">
      <div className="flex flex-col  sm:px-8 md:flex-row ">
        <div className="md:absolute md:right-10 md:max-w-[350px] md:mt-10 lg:right-28">
          <img
            src={urlFor(bannerData.image.asset._ref)}
            alt=""
            className="sm:max-w-[400px] h-full "
          />
        </div>

        <div className="md:flex md:flex-col ">
          <h1 className="text-3xl font-bold mt-10 lg:text-[3rem]">
            {bannerData.slogan}
          </h1>
          <p className="mt-4 md:flex-wrap md:max-w-xl lg:text-2xl lg:mt-8 lg:font-normal">
            {bannerData.desc}
          </p>

          <button className="lg:py-3 lg:text-[20px] lg:max-w-[120px] lg:mt-8 mt-6 flex justify-center border-2 rounded-lg bg-black text-white py-1 px-2 max-w-[80px] text-center ">
            {bannerData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Front from "../assets/Front.png";

export default function Banner() {
  return (
    <div className=" p-14 justify-center items-center w-full ">
      <div className="flex flex-col  sm:px-8 md:flex-row ">
        <div className="md:absolute md:right-10 md:max-w-[350px] md:mt-10 ">
          <Image src={Front} alt="" className="sm:max-w-lg h-full " />
        </div>

        <div className="md:flex md:flex-col ">
          <h1 className="text-3xl font-bold mt-10 lg:text-[3rem]">
            FEEL IT TO BELIVE IT
          </h1>
          <p className="mt-4 md:flex-wrap md:max-w-xl lg:text-2xl lg:mt-8">
            Our most cushioned road-running shoe gives you extraordinary
            comfort, supreme softness and lightweight support through every
            mile.
          </p>

          <button className="lg:py-3 lg:text-[20px] lg:max-w-[120px] lg:mt-8 mt-6 flex justify-center border-2 rounded-lg bg-black text-white py-1 px-2 max-w-[80px] text-center ">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

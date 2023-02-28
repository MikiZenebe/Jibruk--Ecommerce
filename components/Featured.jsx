/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";

function Featured({ featured }) {
  //Extract the fields from the props
  const { image, name, price, slug } = featured;

  return (
    <div>
      <div>
        <div
          style={{ boxShadow: " 0px 70px 73px -33px rgba(0, 0, 0, 0.12)" }}
          className="card bg-white h-[225px] w-[200px] relative rounded-lg mb-20 flex flex-col  "
        >
          <img
            src={urlFor(image && image[0])}
            alt=""
            className="w-[100px]  absolute bottom-[120px] ml-12 mt-4"
          />

          <p className="mt-36 text-center">{name}</p>
          <p className="text-center font-bold mt-4">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Featured({ featured }) {
  //Extract the fields from the props
  const { image, name, price, slug, rowID } = featured;
  console.log(featured);

  return (
    <div>
      <div>
        <Link href={`/products/slug`}>
          <div
            style={{ boxShadow: " 0px 70px 73px -33px rgba(0, 0, 0, 0.12)" }}
            className="bg-white h-[225px] w-[200px] relative rounded-lg mb-20 flex flex-col cursor-pointer"
          >
            <img
              src={urlFor(image && image[0])}
              alt=""
              className="w-[100px]  absolute bottom-[120px] ml-12 mt-4"
            />

            <p className="mt-36 text-center">{name}</p>
            <p className="text-center font-bold mt-4">${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Featured;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";

function Shoes({ shoes }) {
  //Extract the fields from the props
  const { image, name, price } = shoes;
  console.log(shoes);
  return (
    <div>
      <div>
        <Link href={`/products/slug`}>
          <div
            style={{ boxShadow: " 0px 70px 73px -33px rgba(0, 0, 0, 0.12)" }}
            className="card bg-white h-[190px] w-[150px] sm:h-[190px] sm:w-[200px] relative rounded-lg mb-18 flex flex-col cursor-pointer mt-4"
          >
            <img
              src={urlFor(image && image[0])}
              alt=""
              className="sm:w-[120px] w-[100px]  absolute bottom-[120px] ml-6 sm:ml-12 mt-4"
            />

            <p className="sm:mt-28 mt-[90px] text-center">{name}</p>
            <p className="text-center font-bold mt-4">${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Shoes;

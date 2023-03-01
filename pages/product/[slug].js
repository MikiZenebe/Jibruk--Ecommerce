/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from "../../lib/client";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import { toast } from "react-hot-toast";

//Fetch the Data
//{slug} means access everything in that slug
export const getStaticProps = async ({ params: { slug } }) => {
  const Detailquery = `*[_type == "shoes" && slug.current == '${slug}'][0]`;
  const featuredQuery = '*[_type == "featured"]';

  const detail = await client.fetch(Detailquery);
  const featuredData = await client.fetch(featuredQuery);

  return {
    props: { detail, featuredData },
  };
};

//For page optimize & ready for uses multiple links
export const getStaticPaths = async () => {
  //Give me a products but return only the current slug
  const query = `*[_type == "shoes"] {
    slug {
      current
    }
  }`;

  const details = await client.fetch(query);
  const paths = details.map((detail) => ({
    params: {
      slug: detail.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

const ProductDetail = ({ detail }) => {
  const { image, name, details } = detail;
  const { qty, incQty, decQty, cartAdd } = useStateContext();

  return (
    <div>
      <div className=" flex flex-col  items-center justify-between pt-10  sm:flex-row sm:px-8 md:px-24 lg:px-28 lg:mb-96">
        <div
          style={{ boxShadow: " 0px 70px 73px -33px rgba(0, 0, 0, 0.12)" }}
          className="card bg-white h-[220px] w-[220px] sm:h-[230px] sm:w-[230px] lg:h-[260px] lg:w-[260px] lg:p-2 relative rounded-lg   cursor-pointer mt-4"
        >
          <img
            className="w-[160px] lg:w-[180px] justify-center items-center ml-6 mt-8 sm:ml-8 sm:mt-10"
            src={urlFor(image && image[0])}
            alt=""
          />
        </div>

        <div className="w-[300px] pt-10 h-[600px] sm:h-full lg:w-[390px] lg:h-[350px] ">
          <h1 className="font-bold text-gray-700 text-[20px] text-center sm:text-left ">
            {name}
          </h1>
          <p className="text-gray-700 pt-2 lg:pb-4">{details}</p>

          <div className="pt-3 flex gap-4">
            <span>Quantitiy</span>

            <button className="card">
              <AiOutlineMinusCircle onClick={decQty} />
            </button>
            <p className="font-semibold">{qty}</p>
            <button className="card ">
              <AiOutlinePlusCircle onClick={incQty} />
            </button>
          </div>

          <div className="pt-8">
            {" "}
            <button className="card bg-black text-white justify-center items-center text-center px-8 w-full py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

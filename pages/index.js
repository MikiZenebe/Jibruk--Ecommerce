import { FeatureStyle, ShoeStyle } from "../animation/marquee";
import { Banner, Featured } from "../components";
import Shoes from "../components/Shoes";
import { client } from "../lib/client";

//Fetch the Data
export const getServerSideProps = async () => {
  const BannerQuery = '*[_type == "banner"]'; //grab all item from banner
  const bannerData = await client.fetch(BannerQuery); //fetch the banner items

  const featuredQuery = '*[_type == "featured"]';
  const featuredData = await client.fetch(featuredQuery);

  const shoesQuery = '*[_type == "shoes"]';
  const shoesData = await client.fetch(shoesQuery);

  return {
    props: { bannerData, featuredData, shoesData },
  };
};

export default function Home({ bannerData, featuredData, shoesData }) {
  return (
    <>
      <Banner bannerData={bannerData.length && bannerData[0]} />

      {/* The Featured Component */}
      <FeatureStyle>
        <h1 className="mt-4 md:mt-14 px-14 md:px-[90px] text-3xl font-bold text-center text-gray-700">
          Featured
        </h1>
        <p className="text-center mt-2 text-gray-700">
          The Collection of Fashion
        </p>
        <div className="marquee">
          <div className="container track px-14 md:px-[90px] mt-16 md:mt-20 ">
            {featuredData?.map((featured) => (
              <Featured key={featured._id} featured={featured} />
            ))}
          </div>
        </div>
      </FeatureStyle>

      {/* The Shoes Component */}
      <ShoeStyle>
        <div className="mt-14 flex flex-col">
          <h1 className="mt-4 md:mt-14 px-14 md:px-[90px] text-3xl font-bold text-center text-gray-700">
            Shoes
          </h1>
          <p className="text-center mt-2 text-gray-700 mb-4 ">
            Sole For An Essential Look
          </p>
          <div className="container ">
            <div className="px-14 lg:px-12 sm:px-8 md:px-[40px] mt-12 md:mt-18 grid grid-cols-2 sm:grid-cols-3 sm:gap-20 md:grid-cols-4 md:gap-56 lg:grid-cols-4 xl:grid-cols-5 lg:gap-16 gap-8">
              {shoesData.map((shoes) => (
                <Shoes key={shoes._id} shoes={shoes} />
              ))}
            </div>
          </div>
        </div>
      </ShoeStyle>
    </>
  );
}

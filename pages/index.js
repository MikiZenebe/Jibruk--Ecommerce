import { FeatureStyle } from "../animation/marquee";
import { Banner, Featured } from "../components";
import { client } from "../lib/client";

//Fetch the Data
export const getServerSideProps = async () => {
  const BannerQuery = '*[_type == "banner"]'; //grab all item from banner
  const bannerData = await client.fetch(BannerQuery); //fetch the banner items

  const featuredQuery = '*[_type == "featured"]';
  const featuredData = await client.fetch(featuredQuery);

  return {
    props: { bannerData, featuredData },
  };
};

export default function Home({ bannerData, featuredData }) {
  return (
    <>
      <Banner bannerData={bannerData.length && bannerData[0]} />

      {/* The Featured Component */}
      <FeatureStyle>
        <h1 className="mt-5 md:mt-14 px-14 md:px-[90px] text-3xl font-bold">
          Featured
        </h1>
        <div className="marquee">
          <div className="container track px-14 md:px-[90px] mt-16 md:mt-20 ">
            {featuredData?.map((featured) => (
              <Featured key={featured._id} featured={featured} />
            ))}
          </div>
        </div>
      </FeatureStyle>

      {/* The Shoes Component */}
    </>
  );
}

//  position: relative;
//     height: 400px;
//     width: 100%;
//     overflow-x: hidden;

// px-14 md:px-[90px] mt-16 md:mt-20 flex flex-row  gap-8

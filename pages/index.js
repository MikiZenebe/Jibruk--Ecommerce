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
      <h1 className="mt-5 md:mt-14 px-14 md:px-[90px] text-3xl font-bold">
        Featured
      </h1>
      <div className="relative w-full h-[400px] overflow-x-hidden scroll scroll-smooth">
        <div className="px-14 md:px-[90px] mt-16 md:mt-20 flex flex-row  gap-8 ">
          {featuredData?.map((featured) => (
            <Featured rowID="1" key={featured._id} featured={featured} />
          ))}
        </div>
      </div>
    </>
  );
}

//  position: relative;
//     height: 400px;
//     width: 100%;
//     overflow-x: hidden;

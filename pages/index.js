import { Banner } from "../components";
import { client } from "../lib/client";

//Fetch the Data
export const getServerSideProps = async () => {
  const BannerQuery = '*[_type == "banner"]'; //grab all item from banner
  const bannerData = await client.fetch(BannerQuery); //fetch the banner items

  return {
    props: { bannerData },
  };
};

export default function Home({ bannerData }) {
  console.log(bannerData);
  return (
    <>
      <Banner bannerData={bannerData.length && bannerData[0]} />
    </>
  );
}

import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

//Create a client setup
export const client = createClient({
  projectId: "azfdvzrv",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//access to url where the images stored
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

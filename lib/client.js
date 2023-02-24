import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

//Create a client setup
export const client = createClient({
  projectId: "azfdvzrv",
  dataset: "production",
  apiVersion: "2023-02-24",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//access to url where the images stored
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

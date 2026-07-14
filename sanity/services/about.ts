import { client } from "../lib/client";
import { ABOUT_QUERY } from "../queries/about";

export async function getAbout() {
  return client.fetch(ABOUT_QUERY);
}
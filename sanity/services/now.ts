import { client } from "../lib/client";
import { NOW_QUERY } from "../queries/now";

export async function getNowSection() {
  return client.fetch(NOW_QUERY);
}
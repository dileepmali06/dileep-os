import { client } from "../lib/client";
import { nowQuery } from "../queries/now";

export async function getNowSection() {
  return await client.fetch(
    nowQuery,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}
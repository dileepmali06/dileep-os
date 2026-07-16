import { client } from "../lib/client";
import { FUN_FACTS_QUERY } from "../queries/fun-fact";

export async function getFunFacts() {
  return await client.fetch(
    FUN_FACTS_QUERY
  );
}
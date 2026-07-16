import { client } from "../lib/client";
import { CORE_VALUES_QUERY } from "../queries/core-value";

export async function getCoreValues() {
  return await client.fetch(
    CORE_VALUES_QUERY
  );
}
import { client } from "../lib/client";
import { USES_QUERY } from "../lib/queries";

export async function getUses() {
  return client.fetch(USES_QUERY);
}
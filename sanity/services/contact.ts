import { client } from "@/sanity/lib/client";
import { CONTACT_STATS_QUERY } from "../queries/contact";


/* ==========================================================================
   GET CONTACT STATS
========================================================================== */

export async function getContactStats() {
  return client.fetch(CONTACT_STATS_QUERY);
}
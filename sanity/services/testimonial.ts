import { client } from "../lib/client";
import { TESTIMONIALS_QUERY } from "../lib/queries";

export async function getTestimonials() {
  return client.fetch(
    TESTIMONIALS_QUERY
  );
}
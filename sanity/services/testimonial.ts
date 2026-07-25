import { client } from "../lib/client";
import { TESTIMONIALS_QUERY } from "../queries/testimonial";

export async function getTestimonials() {
  return client.fetch(
    TESTIMONIALS_QUERY
  );
}
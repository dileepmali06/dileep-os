import { client } from "../lib/client";
import { COURSES_QUERY } from "../queries/course";

export async function getCourses() {
  return await client.fetch(
    COURSES_QUERY
  );
}
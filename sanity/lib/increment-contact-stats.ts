import { writeClient } from "@/sanity/lib/write-client";

export async function incrementContactStats(contactType: string) {
  try {
    await writeClient.createIfNotExists({
      _id: "contactStats",
      _type: "contactStats",
      totalEnquiries: 0,
      hireRequests: 0,
      freelanceProjects: 0,
      generalInquiries: 0,
      wonProjects: 0,
    });

    const breakdownField =
      contactType === "hire-me"
        ? "hireRequests"
        : contactType === "freelance"
        ? "freelanceProjects"
        : contactType === "general"
        ? "generalInquiries"
        : null;

    let patch = writeClient
      .patch("contactStats")
      .inc({ totalEnquiries: 1 })
      .set({ lastEnquiryAt: new Date().toISOString() });

    if (breakdownField) {
      patch = patch.inc({ [breakdownField]: 1 });
    }

    await patch.commit();
  } catch (statErr) {
    console.error("Failed to update contactStats:", statErr);
  }
}
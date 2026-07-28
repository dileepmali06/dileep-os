import ContactHero from "@/components/contact/contact-hero";
import ContactStats from "@/components/contact/contact-stats";
import HireMe from "@/components/contact/hire-me";
import ContactMethods from "@/components/contact/contact-methods";
import ContactForm from "@/components/contact/contact-form";
import { getContactStats } from "@/sanity/services/contact";

export const metadata = {
  title: "Contact | Dileep Mali",
  description:
    "Get in touch with Dileep Mali for full-time opportunities, freelance projects, consulting, or general inquiries.",
};

export default async function ContactPage() {
  const stats = await getContactStats();

  return (
    <main className="min-h-screen">
      <ContactHero />

      <ContactStats
        stats={{
          hireRequests: stats?.hireRequests ?? 0,
          freelanceProjects: stats?.freelanceProjects ?? 0,
          generalInquiries: stats?.generalInquiries ?? 0,
          wonProjects: stats?.wonProjects ?? 0,
        }}
      />

      <HireMe />

      <ContactMethods />

      <ContactForm />
    </main>
  );
}
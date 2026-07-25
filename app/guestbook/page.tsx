import GuestbookHero from "@/components/guestbook/guestbook-hero";
import GuestbookStats from "@/components/guestbook/guestbook-stats";
import LeaveMessage from "@/components/guestbook/leave-message";
import PinnedMessages from "@/components/guestbook/pinned-messages";
import FeaturedMessages from "@/components/guestbook/featured-messages";

import {
  getGuestbookMessages,
  getFeaturedGuestbookMessages,
  getPinnedGuestbookMessages,
  getGuestbookStats,
} from "@/sanity/services/guestbook";
import GuestbookList from "@/components/guestbook/guestbook-list";

export const metadata = {
  title: "Guestbook",
  description: "Leave a message and see what visitors have to say.",
};

export default async function GuestbookPage() {
  const [messages, featured, pinned, stats] = await Promise.all([
    getGuestbookMessages(),
    getFeaturedGuestbookMessages(),
    getPinnedGuestbookMessages(),
    getGuestbookStats(),
  ]);

  const safeStats = {
    approvedMessages: stats?.approvedMessages ?? messages.length,
    featuredMessages: stats?.featuredMessages ?? featured.length,
    pinnedMessages: stats?.pinnedMessages ?? pinned.length,
    countries: stats?.countries ?? 0,
    professions: stats?.professions ?? 0,
  };

  return (
    <main>
      <GuestbookHero
        approvedMessages={safeStats.approvedMessages}
        featuredMessages={safeStats.featuredMessages}
        countries={safeStats.countries}
      />

      <GuestbookStats stats={safeStats} />

      <LeaveMessage />

      <PinnedMessages messages={pinned} />

      <FeaturedMessages messages={featured} />

      <GuestbookList messages={messages} />
    </main>
  );
}
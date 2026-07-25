import { client } from "@/sanity/lib/client";

import {
  GUESTBOOK_QUERY,
  FEATURED_GUESTBOOK_QUERY,
  PINNED_GUESTBOOK_QUERY,
  RECENT_GUESTBOOK_QUERY,
  SEARCH_GUESTBOOK_QUERY,
  GUESTBOOK_BY_COUNTRY_QUERY,
  GUESTBOOK_BY_PROFESSION_QUERY,
  GUESTBOOK_STATS_QUERY,
} from "../queries/guestbook";

/* ==========================================================================
   GET ALL APPROVED GUESTBOOK MESSAGES
========================================================================== */

export async function getGuestbookMessages() {
  return client.fetch(GUESTBOOK_QUERY);
}

/* ==========================================================================
   GET FEATURED GUESTBOOK MESSAGES
========================================================================== */

export async function getFeaturedGuestbookMessages() {
  return client.fetch(FEATURED_GUESTBOOK_QUERY);
}

/* ==========================================================================
   GET PINNED GUESTBOOK MESSAGES
========================================================================== */

export async function getPinnedGuestbookMessages() {
  return client.fetch(PINNED_GUESTBOOK_QUERY);
}

/* ==========================================================================
   GET RECENT GUESTBOOK MESSAGES
========================================================================== */

export async function getRecentGuestbookMessages() {
  return client.fetch(RECENT_GUESTBOOK_QUERY);
}

/* ==========================================================================
   SEARCH GUESTBOOK MESSAGES
========================================================================== */

export async function searchGuestbookMessages(search: string) {
  return client.fetch(SEARCH_GUESTBOOK_QUERY, {
    search,
  });
}

/* ==========================================================================
   GET GUESTBOOK MESSAGES BY COUNTRY
========================================================================== */

export async function getGuestbookMessagesByCountry(country: string) {
  return client.fetch(GUESTBOOK_BY_COUNTRY_QUERY, {
    country,
  });
}

/* ==========================================================================
   GET GUESTBOOK MESSAGES BY PROFESSION
========================================================================== */

export async function getGuestbookMessagesByProfession(profession: string) {
  return client.fetch(GUESTBOOK_BY_PROFESSION_QUERY, {
    profession,
  });
}

/* ==========================================================================
   GET GUESTBOOK STATS
========================================================================== */

export async function getGuestbookStats() {
  return client.fetch(GUESTBOOK_STATS_QUERY);
}
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "../ui/container";
import GuestbookCard from "./guestbook-card";
import GuestbookSearch from "./guestbook-search";
import GuestbookFilter from "./guestbook-filter";
import GuestbookEmpty from "./guestbook-empty";
import GuestbookPagination from "./guestbook-pagination";

type GuestbookMessage = {
  _id: string;
  name: string;
  profession?: string;
  company?: string;
  country?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  avatar?: string;
  message: string;
  rating?: number;
  reply?: string;
  featured?: boolean;
  pinned?: boolean;
  createdAt?: string;
};

type GuestbookListProps = {
  messages: GuestbookMessage[];
};

const PER_PAGE = 9;

export default function GuestbookList({ messages }: GuestbookListProps) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [profession, setProfession] = useState("all");
  const [page, setPage] = useState(1);

  const countries = useMemo(
    () => Array.from(new Set((messages ?? []).map((m) => m.country).filter(Boolean))) as string[],
    [messages]
  );

  const professions = useMemo(
    () => Array.from(new Set((messages ?? []).map((m) => m.profession).filter(Boolean))) as string[],
    [messages]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (messages ?? []).filter((entry) => {
      const countryMatch = country === "all" || entry.country === country;
      const professionMatch = profession === "all" || entry.profession === profession;

      if (!countryMatch || !professionMatch) return false;
      if (!query) return true;

      return (
        entry.name?.toLowerCase().includes(query) ||
        entry.profession?.toLowerCase().includes(query) ||
        entry.company?.toLowerCase().includes(query) ||
        entry.country?.toLowerCase().includes(query) ||
        entry.message?.toLowerCase().includes(query)
      );
    });
  }, [messages, search, country, profession]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageMessages = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  function handleFilterChange(fn: () => void) {
    fn();
    setPage(1);
  }

  return (
    <section id="all-messages" className="pb-24">
      <Container>
        <div className="mb-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            The Guestbook
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">All Messages</h2>
        </div>

        <div className="rounded-2xl border-[3px] border-black bg-white p-5 shadow-[7px_7px_0px_#000] sm:p-6">
          <GuestbookSearch
            value={search}
            onChange={(v) => handleFilterChange(() => setSearch(v))}
          />
          <div className="mt-4">
            <GuestbookFilter
              countries={countries}
              activeCountry={country}
              onCountryChange={(v) => handleFilterChange(() => setCountry(v))}
              professions={professions}
              activeProfession={profession}
              onProfessionChange={(v) => handleFilterChange(() => setProfession(v))}
            />
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Showing <span className="font-bold text-black">{filtered.length}</span> of{" "}
          {messages?.length ?? 0} messages
        </p>

        {pageMessages.length > 0 ? (
          <>
            <motion.div
              key={currentPage}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pageMessages.map((entry) => (
                <GuestbookCard key={entry._id} entry={entry} />
              ))}
            </motion.div>

            <GuestbookPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <div className="mt-10">
            <GuestbookEmpty />
          </div>
        )}
      </Container>
    </section>
  );
}
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HelpSearchBox({
  onSearch,
}: {
  onSearch?: (q: string) => void;
}) {
  const [q, setQ] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) onSearch(q.trim());
    // For now simply log — can be replaced with navigation or live results
    console.log("Help search:", q.trim());
  }

  return (
    <form
      role="search"
      aria-label="Search help docs"
      className="flex w-full gap-2 items-center"
      onSubmit={submit}
    >
      <label htmlFor="help-search" className="sr-only">
        Search help
      </label>
      <Input
        id="help-search"
        name="q"
        type="search"
        placeholder="Search help articles, guides, and FAQs"
        value={q}
        onChange={e => setQ(e.target.value)}
        className="flex-1 p-3 py-5 "
      />

      <Button
        type="submit"
        className="px-4 py-5   "
      >
        Search
      </Button>
    </form>
  );
}

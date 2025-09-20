"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // Placeholder: integrate with API later
        console.log("Contact request:", { name, email, message });
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      }}
      className="space-y-3"
    >
      {sent && <div className="text-green-600">Message sent (local only)</div>}
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your name"
        required
        className="w-full p-3"
      />
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 "
      />
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Message"
        required
        className="w-full p-3 resize-none rounded bg-background border h-32"
      />
      <Button type="submit" className="px-4 py-2 bg-primary text-white h-[40px]">
        Send message
      </Button>
    </form>
  );
}

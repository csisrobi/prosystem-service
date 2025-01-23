"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/send-email";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendEmail({ name, email, message });
      toast({
        title: "Mesaj trimis!",
        description: "Vă mulțumim pentru mesaj. Vă vom contacta în curând.",
      });
      setName("");
      setEmail("");
      setMessage("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      toast({
        title: "Eroare",
        description:
          "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Nume"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Mesajul dumneavoastră"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Trimite mesajul</Button>
    </form>
  );
}

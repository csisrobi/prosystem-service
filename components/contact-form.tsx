"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/send-email";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Eroare",
        description:
          "Trebuie să fiți de acord cu politica GDPR pentru a trimite mesajul.",
        variant: "destructive",
      });
      return;
    }

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
      <div className="flex items-center space-x-2">
        <Checkbox
          id="gdpr"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
        />
        <label
          htmlFor="gdpr"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Sunt de acord cu{" "}
          <Link href="/gdpr" className="text-primary hover:underline">
            politica GDPR
          </Link>
        </label>
      </div>
      <Button type="submit">Trimite mesajul</Button>
    </form>
  );
}

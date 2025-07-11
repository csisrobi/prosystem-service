import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica GDPR",
};

export default function GdprPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Politica de Confidențialitate (GDPR)
      </h1>
      <p className="mb-4">
        La ProSystem Service, ne angajăm să protejăm confidențialitatea datelor
        dumneavoastră personale în conformitate cu Regulamentul General privind
        Protecția Datelor (GDPR).
      </p>
      <h2 className="text-2xl font-semibold mb-2">Date colectate</h2>
      <p className="mb-4">
        Prin formularul de contact, colectăm numele, adresa de email și mesajul
        dumneavoastră. Aceste date sunt folosite exclusiv pentru a vă contacta
        în legătură cu cererea dumneavoastră și nu pentru alte scopuri.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Scopul utilizării datelor</h2>
      <p className="mb-4">
        Email-ul este folosit doar pentru a vă răspunde. Nu împărtășim datele cu
        terțe părți și nu le folosim în scopuri de marketing.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Drepturile dumneavoastră</h2>
      <p className="mb-4">
        Aveți dreptul să accesați, să rectificați sau să ștergeți datele
        dumneavoastră personale. Pentru orice solicitări, vă rugăm să ne
        contactați prin formularul de contact.
      </p>
    </div>
  );
}

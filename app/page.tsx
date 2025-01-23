import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";
import { ReferencesTable } from "@/components/references-table";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Printer,
  Settings,
  PenToolIcon as Tool,
} from "lucide-react";
import Image from "next/image";
import Featured from "@/public/featured.webp";
export const dynamic = "force-static";
export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={Featured}
            alt="Printing equipment background"
            className="object-cover opacity-20"
            fill
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Prosystem Service
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Expertul dumneavoastră în echipamente tipografice și service
            profesional
          </p>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Referințe</h2>
          <div className="max-w-4xl mx-auto">
            <ReferencesTable />
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section id="qualification" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Calificare și Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Instalare și Punere în Funcțiune
                </h3>
                <p className="text-slate-600">
                  Echipa noastră calificată oferă servicii profesionale de
                  instalare și configurare pentru toate tipurile de echipamente
                  tipografice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Tool className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Service în Garanție
                </h3>
                <p className="text-slate-600">
                  Asigurăm service în garanție și post-garanție pentru o gamă
                  largă de echipamente tipografice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Printer className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Expertiză Tehnică
                </h3>
                <p className="text-slate-600">
                  Oferim consultanță tehnică și soluții personalizate pentru
                  optimizarea proceselor tipografice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galerie Foto</h2>
          <PhotoGallery />
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-slate-600">+40 745 943 791</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Adresă</h3>
                  <p className="text-slate-600">Cluj-Napoca, România</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Prosystem Service SRL. Toate drepturile
            rezervate.
          </p>
        </div>
      </footer>
    </main>
  );
}

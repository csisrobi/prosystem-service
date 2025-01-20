import { Navigation } from "@/components/navigation"
import { ReferencesTable } from "@/components/references-table"
import { PhotoGallery } from "@/components/photo-gallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Printer, Settings, PenToolIcon as Tool, Phone, Mail, MapPin, ChevronDown, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

const links = [
  { name: "Siko Romania", url: "http://www.siko.ro" },
  { name: "Prosystem Print", url: "http://www.prosystemprint.ro" },
  { name: "KBA", url: "http://www.kba.com" },
  { name: "Kolbus", url: "http://www.kolbus.de" },
]

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Printing equipment background"
            className="object-cover opacity-20"
            fill
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Prosystem Service SRL
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Expertul dumneavoastră în echipamente tipografice și service profesional
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contactați-ne
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
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
          <h2 className="text-3xl font-bold text-center mb-12">Calificare și Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instalare și Punere în Funcțiune</h3>
                <p className="text-slate-600">
                  Echipa noastră calificată oferă servicii profesionale de instalare și configurare pentru toate tipurile de echipamente tipografice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Tool className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Service în Garanție</h3>
                <p className="text-slate-600">
                  Asigurăm service în garanție și post-garanție pentru o gamă largă de echipamente tipografice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Printer className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expertiză Tehnică</h3>
                <p className="text-slate-600">
                  Oferim consultanță tehnică și soluții personalizate pentru optimizarea proceselor tipografice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galerie Foto</h2>
          <PhotoGallery />
        </div>
      </section>

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
                  <p className="text-slate-600">+40 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600">contact@prosystemservice.ro</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Adresă</h3>
                  <p className="text-slate-600">București, România</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Linkuri Utile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:bg-slate-50 transition-colors"
              >
                <span>{link.name}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Prosystem Service SRL. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </main>
  )
}


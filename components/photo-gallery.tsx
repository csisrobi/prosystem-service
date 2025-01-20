'use client'

import * as React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Echipament tipografic 1",
    title: "Instalare Echipament",
    description: "Instalarea unui echipament tipografic modern",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Echipament tipografic 2",
    title: "Service în Desfășurare",
    description: "Lucrări de mentenanță pentru echipamente tipografice",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Echipament tipografic 3",
    title: "Atelier Tehnic",
    description: "Vedere din atelierul nostru tehnic",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Echipament tipografic 4",
    title: "Echipă Tehnică",
    description: "Echipa noastră tehnică la lucru",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage !== null && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{galleryImages[selectedImage].title}</DialogTitle>
              <DialogDescription>
                {galleryImages[selectedImage].description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}


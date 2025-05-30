'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Facebook, Instagram, Play, Youtube } from 'lucide-react'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="min-h-screen pt-20 md:pt-40 md:px-10 bg-[#0a0a0a] relative overflow-hidden"
      data-theme="dark"
    >
      {/* Fondo mejorado con patron y gradientes */}
      <div className="absolute inset-0">
        {/* Patrón de líneas con variación de intensidad */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#363636_1px,transparent_1px),linear-gradient(to_bottom,#363636_1px,transparent_1px),linear-gradient(to_right,#262626_1px,transparent_3px),linear-gradient(to_bottom,#262626_1px,transparent_3px)]"
          style={{
            backgroundSize: '24px 24px, 48px 48px',
            opacity: 0.1,
          }}
        />

        {/* Gradientes de iluminación sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#ffffff05_0%,transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_70%,#ffffff03_100%)]" />
      </div>

      {/* <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div> */}
      <div className="container px-4 py-16 mx-auto  grid md:grid-cols-2 gap-12  relative z-10">
        {/* Logo para desktop */}
        <div className="flex flex-col  w-full gap-8  ">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center items-center">
            <img
              src="/icon.png"
              alt="Logo Rosarito Elite"
              className="object-contain w-40 h-40 md:w-60 md:h-60"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col text-center space-y-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Rosarito Elite <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Basketball Academy
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Transforma tu potencial en rendimiento con nuestro programa profesional de
              entrenamiento de baloncesto. ¡Inscripciones abiertas!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 rounded-lg transition-all shadow-lg hover:shadow-red-500/30"
              asChild
            >
              <Link href="#inscripciones">
                Comenzar Ahora
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-stone-800 hover:text-stone-200 text-lg py-6 px-8 rounded-lg hover:bg-white/5 hover:border-white transition-all"
              asChild
            >
              <Link href="#programas">Conocer Más</Link>
            </Button>
          </div>

          {/* Nueva sección de redes sociales */}
          <div className="flex justify-center gap-4 mt-4 w-full">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link href="https://www.instagram.com/reb_academy/" target="_blank">
                <Instagram className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                href="https://www.facebook.com/people/Rosarito-Elite-Basketball-Academy/61553070687108/"
                target="_blank"
              >
                <Facebook className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link href="https://tiktok.com" target="_blank">
                <Play className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link href="https://youtube.com" target="_blank">
                <Youtube className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
          </div>
          {/* Left side video - Not visible on mobile */}
          <div className="hidden md:block relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/training-preview.jpg"
            >
              <source src="/media/video1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Media Section */}
        <div className="relative group flex flex-col gap-6 h-full">
          {/* Video Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/training-preview.jpg"
            >
              <source src="/media/video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Image Container - Hidden on mobile */}
          <div className="hidden md:block relative aspect-square rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <Image
              src="/media/programs6.JPG"
              alt="Equipo entrenando"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
    </div>
  )
}

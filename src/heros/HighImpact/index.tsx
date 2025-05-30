'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

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
      <div className="absolute inset-0">
        {/* Patrón de líneas con variación de intensidad */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#363636_1px,transparent_1px),linear-gradient(to_bottom,#363636_1px,transparent_1px),linear-gradient(to_right,#262626_1px,transparent_3px),linear-gradient(to_bottom,#262626_1px,transparent_3px)]"
          style={{
            backgroundSize: '24px 24px, 48px 48px',
            opacity: 0.1,
          }}
        />

        <div className="container mb-8 z-10 relative flex items-center justify-center">
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
        </div>
      </div>
    </div>
  )
}

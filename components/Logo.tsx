import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className?: string;
  imageClassName?: string;
}

const Logo = ({ className, imageClassName }: LogoProps) => {
  return (
    <Link href="/" className="inline-flex items-center">
      {/*
        1. Menambahkan 'relative' agar Next.js Image dengan properti 'fill' terkunci di dalam div ini.
        2. Menentukan tinggi (h-8 md:h-10) dan lebar (w-32 md:w-40) spesifik agar proporsi logo proporsional.
      */}
      <div className={cn("relative h-8 w-32 shrink-0 md:h-10 md:w-40", className)}>
        <Image
          src="/logo.webp"
          alt="Logo Ecommerce"
          fill
          priority // Sangat penting agar logo termuat instan di awal halaman (LCP)
          className={cn(
            "object-contain object-left transition-transform duration-200 ease-out hover:scale-105 active:scale-95 origin-left",
            imageClassName
          )}
          sizes="(max-width: 768px) 128px, 160px" // Disesuaikan dengan batas lebar maksimal w-32 dan w-40
        />
      </div>
    </Link>
  )
}

export default Logo

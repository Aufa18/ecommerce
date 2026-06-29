import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("text-2xl text-shop-primary font-black tracking-wider uppercase hover:text-shop-primary-hover hoverEffect group font-sans", className)}>
            Ecommerc<span className='text-shop-primary/80 group-hover:text-shop-primary hoverEffect'>e</span>
        </h2>
    </Link>
  )
}

export default Logo

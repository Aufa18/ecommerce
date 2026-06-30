import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { FooterList } from './FooterList'
import { categoriesData, quickLinksData } from '@/constants/data'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
        <Container>
            <FooterTop />
            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* Kolom 1 */}
                <div className='space-y-4'>
                    <Logo />
                    <p className='text-gray-600 text-sm'>
                        Discover curated furniture collections at Ecommerce, blending style and comfort to elevate your living spaces.
                    </p>
                    <SocialMedia
                        className='text-zinc-500'
                        iconClassName='hover:text-zinc-950 transition-colors'
                    />
                </div>

                {/* Kolom 2: Quick Links */}
                <FooterList title="Quick Link" items={quickLinksData} />

                {/* Kolom 3: Categories */}
                <FooterList title="Category" items={categoriesData} />

                {/* Kolom 4: Newsletter */}
                <div className='space-y-4'>
                    <h3 className="font-bold text-zinc-950 uppercase text-sm tracking-widest">Newsletter</h3>
                    <p className="text-zinc-500 text-sm">Dapatkan info promo terbaru langsung ke emailmu.</p>
                    <div className="flex gap-2">
                         <input
                            type="email"
                            placeholder="Emailmu..."
                            className="bg-white border border-zinc-200 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-zinc-950"
                         />
                         <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-zinc-800 transition-colors">
                            Subscribe
                         </button>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="py-6 border-t border-zinc-200 text-center text-sm text-zinc-500">
                © 2026 Ecommerce. All rights reserved.
            </div>
        </Container>
    </footer>
  )
}

export default Footer

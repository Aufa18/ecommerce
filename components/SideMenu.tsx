import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-0 h-screen w-full z-50 transition-all duration-300 ease-in-out ${
        isOpen
          ? "bg-black/30 backdrop-blur-sm pointer-events-auto"
          : "bg-transparent pointer-events-none"
      }`}
    >
      {/*
        🔥 PERBAIKAN DESAIN UTAMA:
        - Menggunakan latar belakang putih bersih (bg-white/95) dengan sedikit blur agar terasa premium.
        - Lebar sidebar proporsional (w-[320px]) dengan animasi slide halus.
      */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 h-screen w-[320px] bg-white/95 backdrop-blur-md p-6 flex flex-col justify-between border-r border-zinc-200/50 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Bagian Atas: Header Sidebar */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bagian Tengah: Menu Navigasi Modern */}
          <nav className="flex flex-col space-y-1.5">
            {headerData?.map((item) => {
              const isActive = pathname === item?.href;
              return (
                <Link
                  href={item?.href}
                  key={item?.title}
                  onClick={onClose}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium tracking-wide text-sm transition-all duration-200`}
                >
                  {item?.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bagian Bawah: Social Media Footer */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 px-4">
            Follow Us
          </p>
          <div className="px-4">
            <SocialMedia
              className="justify-start gap-4"
              iconClassName="text-zinc-500 hover:text-zinc-950 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

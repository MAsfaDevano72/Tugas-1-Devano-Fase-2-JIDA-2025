'use client';

import {
    HomeIcon,
    PhotoIcon,
    PhoneIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState} from 'react';

const navLinks = [
{
    name: 'Home',
    href: '/',
    icon: HomeIcon,
},
{
    name: 'Gallery',
    href: '/dashboard/gallery',
    icon: PhotoIcon,
},
{
    name: 'Contact',
    href: '/dashboard/contact',
    icon: PhoneIcon,
},
{
    name: 'Not Found',
    href: '/awkawkawk',
    icon: InformationCircleIcon,
},
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 text-xl font-bold">
            ⚽ Persib Gallery
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'flex items-center gap-2 hover:underline transition',
                    pathname === link.href ? 'text-yellow-300' : ''
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'block px-2 py-1 flex items-center gap-2 rounded hover:bg-blue-600',
                    pathname === link.href ? 'bg-blue-600 text-yellow-300' : ''
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { inter } from '@/app/ui/fonts';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
            <Image 
                src="/404-black.png"
                alt="404 Not Found"
                width={400}
                height={400}
                className="mb-6"
            />
            <Link href="/dashboard/gallery" className={`${inter.className} mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition`}>
                Go to Gallery
            </Link>
        </div>
    );
}

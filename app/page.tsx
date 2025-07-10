import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import style from "@/app/ui/home.module.css";
import Image from "next/image";
import Navbar from "@/app/ui/dashboard/navbar";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6 bg-gray-300">
            <Navbar />
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    
                    <p
                        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
                    >
                        <strong>Selamat datang di Galeri </strong>{" "}
                        <strong><a
                            href="#"
                            className="text-blue-700"
                        >
                            Persib Bandung
                        </a></strong>
                    </p>
                    <Link
                        href="/dashboard/gallery"
                        className="flex items-center gap-5 self-start rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 md:text-base"
                    >
                        <span>Go to Gallery</span>{" "}
                        <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/persib-champions.jpg"
                        width={300}
                        height={300}
                        alt="Persib Bandung"
                    />
                </div>
            </div>
        </main>
    );
}

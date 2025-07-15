import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '@/app/ui/dashboard/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col p-6 bg-gray-300">
                <Navbar />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
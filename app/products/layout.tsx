import Navbar from '@/app/ui/dashboard/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col p-6 bg-gray-300">
      <Navbar />
      <main className="flex-1 mt-4">{children}</main>
    </div>
  );
}

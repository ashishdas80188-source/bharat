import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'EduIndia – All India College Admission Portal',
  description: 'One Platform. Every College. Your Future. Discover 10,000+ colleges across 28 states & 8 union territories in India. Compare courses, fees, and apply online.',
  keywords: 'college admission India, B.Tech admission, MBA colleges India, medical admission, UGC colleges, AICTE approved colleges, EduIndia portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

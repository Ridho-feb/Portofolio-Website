import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ridho Febrian | IT Support & Network Engineer Portfolio',
  description: 'Interactive Debian 13 Linux Terminal Workstation portfolio for Ridho Febrian, IT Support & Network Engineer.',
  keywords: ['Ridho Febrian', 'IT Support', 'Network Engineer', 'Debian Linux', 'MikroTik', 'MTCNA', 'Portfolio'],
  authors: [{ name: 'Ridho Febrian' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="bg-[#0D1117] text-[#F0F6FC] font-mono antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

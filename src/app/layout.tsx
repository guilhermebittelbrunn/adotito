import { Outfit } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/context/ThemeContext';
import { Metadata } from 'next';
import { SidebarProvider } from '@/context/SidebarContext';
import ClientLayout from './clientLayout';

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Adotito',
  description: 'Conectando animais que precisam de um lar com pessoas que têm muito amor para dar.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>
            <ClientLayout>{children}</ClientLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

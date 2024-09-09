import { ReactNode } from 'react';
import NextThemeProvider from '@/NextThemeProvider';
import Header from '@/sections/Header';
import './globals.css';

import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';

// Local font (Helvetica)
const helveticaDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNowDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNowDisplay-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helveticaDisplay',
});

const helveticaMicro = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNowMicro-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNowMicro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNowMicro-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helveticaMicro',
});

// Google Font (IBM Plex Mono)
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500'], // Ensure the needed weights are listed
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibmPlexMono', // Update the variable name to be consistent
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${helveticaDisplay.variable} ${helveticaMicro.variable}`}
    >
      <body className="font-sans lg:pl-117px lg:pr-33px pl-[10px] pr-[10px] bg-background-light dark:bg-background-dark">
        <NextThemeProvider>
          <Header />
          <main className="flex content-center justify-center items-center">
            {children}
          </main>
        </NextThemeProvider>
      </body>
    </html>
  );
}


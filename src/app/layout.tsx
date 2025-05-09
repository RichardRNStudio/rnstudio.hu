import classNames from 'classnames';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Protest_Strike, Quicksand } from 'next/font/google';
import React from 'react';
import Footer from './_components/Footer/Footer';
import Header from './_components/Header/Header';
import OpenToWork from './_components/OpenToWork/OpenToWork';
import { IS_OPEN_TO_WORK, WEBSITE, X_SOCIAL_ID } from './_shared/config';
import './globals.css';

export const quickSand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quickSand',
});

export const protestStrike = Protest_Strike({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-protestStrike',
});

export const metadata: Metadata = {
  title: {
    absolute: 'Richárd Nagy - Javascript Engineer',
    template: 'Richárd Nagy - %s',
  },
  description: "I'm Richárd Nagy, a Javascript Engineer based in Hungary.",
  metadataBase: new URL(WEBSITE),
  creator: 'Richárd Nagy',
  keywords: ['Richárd Nagy', 'Javascript Engineer', 'Remote'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en-US',
    siteName: 'Richárd Nagy',
    url: WEBSITE,
  },
  twitter: {
    creator: X_SOCIAL_ID,
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={classNames(
        quickSand.className,
        quickSand.variable,
        protestStrike.variable,
        'bg-none bg-neutral-200 dark:bg-zinc-900 min-h-screen flex flex-col'
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header />
        {IS_OPEN_TO_WORK && <OpenToWork />}
        <main
          className={classNames(
            'flex-grow',
            IS_OPEN_TO_WORK ? 'pt-1 pb-6' : 'py-6'
          )}
        >
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;

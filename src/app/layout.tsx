import classNames from 'classnames';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Quicksand } from 'next/font/google';
import React from 'react';
import './globals.css';
import Header from './_components/Header/Header';
import Container from './_components/Container/Container';
import Footer from './_components/Footer/Footer';
import OpenToWork from './_components/OpenToWork/OpenToWork';
import { IS_OPEN_TO_WORK, WEBSITE, X_SOCIAL_ID } from './_shared/config';

const quickSand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    absolute: 'Richárd Nagy - Javascript Engineer',
    template: 'Richárd Nagy - %s',
  },
  description: "I'm Richárd Nagy, a Javascript Engineer based in Hungary.",
  metadataBase: new URL(WEBSITE),
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
        'bg-none bg-white dark:bg-black min-h-screen flex flex-col'
      )}
    >
      <ThemeProvider attribute="class">
        <Header />
        {IS_OPEN_TO_WORK && <OpenToWork />}
        <main
          className={classNames(
            'flex-grow',
            IS_OPEN_TO_WORK ? 'pt-1 pb-6' : 'py-6'
          )}
        >
          <Container>{children}</Container>
        </main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;

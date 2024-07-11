import React from 'react';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';

const inter = Barlow({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

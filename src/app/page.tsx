import { Metadata } from 'next';
import Home from './(home)';
import { WEBSITE } from './_shared/config';

export const metadata: Metadata = {
  alternates: {
    canonical: WEBSITE,
  },
};

export const revalidate = 600;

export default function Root() {
  return <Home />;
}

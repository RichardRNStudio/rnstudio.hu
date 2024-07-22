import Image from 'next/image';
import { CompanyLogoProps } from './CompanyLogo.types';

const CompanyLogo = ({ src, alt }: CompanyLogoProps) => (
  <Image
    src={src}
    alt={alt}
    width={50}
    height={50}
    className="rounded-md border-2 border-gray-500 dark:border-black"
  />
);

export default CompanyLogo;

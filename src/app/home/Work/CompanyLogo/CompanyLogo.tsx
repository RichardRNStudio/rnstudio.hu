import Image from 'next/image';
import { CompanyLogoProps } from './CompanyLogo.types';

const CompanyLogo = ({ src, alt }: CompanyLogoProps) => (
  <Image src={src} alt={alt} width={50} height={50} className="rounded-md" />
);

export default CompanyLogo;

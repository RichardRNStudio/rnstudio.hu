import { CompanyLogoProps } from '../components/CompanyLogo/CompanyLogo.types';

export type Job = {
  company: {
    name: string;
    link: string;
    logo?: CompanyLogoProps;
  };
  position: string;
  startDate: Date;
  endDate: Date;
};

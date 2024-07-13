import { CompanyLogoProps } from '../CompanyLogo/CompanyLogo.types';

export interface WorkItemProps extends Partial<CompanyLogoProps> {
  companyName: string;
  position: string;
  link: string;
  startDate: string;
  endDate: string;
}

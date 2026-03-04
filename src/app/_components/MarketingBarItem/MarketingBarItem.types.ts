export type MarketingBarItemProps = {
  type: MarketingBarCategory;
  label: string;
  value: number;
  duration: number;
  isAPIRequired: boolean;
  postFix?: string;
};

export enum MarketingBarCategory {
  years = 'years',
  projects = 'projects',
  givenStars = 'givenStars',
}

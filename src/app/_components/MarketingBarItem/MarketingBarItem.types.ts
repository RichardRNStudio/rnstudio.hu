export type MarketingBarItemProps = {
  type: MarketingBarCategory;
  label: string;
  value: string | number;
  isAPIRequired: boolean;
};

export enum MarketingBarCategory {
  years = 'years',
  projects = 'projects',
  givenStars = 'givenStars',
}

'use client';

import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { Job } from './WorkItem.types';

const WorkItem = ({
  company: { name: companyName, link, logo },
  position,
  startDate,
  endDate,
}: Job) => {
  const startDateYear = startDate.getFullYear();
  const endDateYear = endDate.getFullYear();
  const isEndDateMatchingStartDate = startDateYear === endDateYear;

  const handleOnMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const offset = event.currentTarget.offsetTop;
    document.documentElement.style.setProperty('--bar-offset', `${offset}px`);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={`${companyName} - ${position}`}
      className="z-10"
      onMouseEnter={handleOnMouseEnter}
    >
      <div className="w-full flex flex-row h-18 min-h-18 justify-between cursor-pointer text-black dark:text-white">
        <div className="flex flex-row gap-4 w-8/12 items-center">
          <div className="w-16 min-w-16">
            {!!logo?.src && (
              <CompanyLogo src={logo.src} alt={logo?.alt ?? 'Company Logo'} />
            )}
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{companyName}</div>
            <div className="text-gray-40">{position}</div>
          </div>
        </div>
        <div className="flex justify-end w-4/12 items-center">
          <span>
            {startDateYear} –{' '}
            {isEndDateMatchingStartDate ? <em>Now</em> : endDateYear}
          </span>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;

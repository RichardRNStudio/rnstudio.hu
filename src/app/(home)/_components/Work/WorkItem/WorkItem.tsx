import Link from 'next/link';
import { Job } from './WorkItem.types';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const WorkItem = ({
  company: { name: companyName, link, logo },
  position,
  startDate,
  endDate,
}: Job) => {
  const startDateYear = startDate.getFullYear();
  const endDateYear = endDate.getFullYear();
  const isEndDateNow = endDateYear === new Date().getFullYear();
  return (
    <Link href={link} target="_blank">
      <div className="w-full flex flex-row cursor-pointer hover:text-neutral-300 dark:hover:text-neutral-400 text-black dark:text-white">
        <div className="w-2/12 sm:w-1/12">
          {!!logo?.src && (
            <CompanyLogo src={logo.src} alt={logo?.alt ?? 'Company Logo'} />
          )}
        </div>
        <div className="w-7/12 sm:w-9/12 flex flex-col">
          <div className="font-bold">{companyName}</div>
          <div className="text-gray-40">{position}</div>
        </div>
        <div className="w-3/12 flex justify-end">
          <span>
            {startDateYear} – {isEndDateNow ? <em>Now</em> : endDateYear}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkItem;

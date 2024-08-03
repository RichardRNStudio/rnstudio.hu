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
  const isEndDateNow = endDateYear === new Date().getFullYear();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={`${companyName} - ${position}`}
    >
      <div className="w-full flex flex-row justify-between cursor-pointer hover:text-neutral-300 dark:hover:text-neutral-400 text-black dark:text-white">
        <div className="flex flex-row gap-4 w-8/12">
          <div className="w-14 min-w-14">
            {!!logo?.src && (
              <CompanyLogo src={logo.src} alt={logo?.alt ?? 'Company Logo'} />
            )}
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{companyName}</div>
            <div className="text-gray-40">{position}</div>
          </div>
        </div>
        <div className="flex justify-end w-4/12">
          <span>
            {startDateYear} – {isEndDateNow ? <em>Now</em> : endDateYear}
          </span>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;

import classNames from 'classnames';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { WorkItemProps } from './WorkItem.types';

const WorkItem = ({
  src,
  alt,
  companyName,
  position,
  startDate,
  endDate,
}: WorkItemProps) => (
  <div className="w-full flex flex-row">
    <div className="w-2/12 sm:w-1/12">
      {src && <CompanyLogo src={src} alt={alt ?? 'Company Logo'} />}
    </div>
    <div className="w-8/12 sm:w-9/12 flex flex-col">
      <div className="font-bold">{companyName}</div>
      <div className="text-gray-400">{position}</div>
    </div>
    <div className="w-2/12 flex justify-end">
      {startDate} -{' '}
      <em className={classNames(endDate === 'Now' && 'italic')}>{endDate}</em>
    </div>
  </div>
);

export default WorkItem;

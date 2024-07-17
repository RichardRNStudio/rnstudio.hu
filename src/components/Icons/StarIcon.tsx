import { IIcon } from './IIcon.interface';

const StarIcon = ({ width, height, className, color, onClick }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    onClick={onClick}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

export default StarIcon;

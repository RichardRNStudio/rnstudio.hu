import { IconProps } from './Icon.interface';

export const HamburgerIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7L7 7M20 7L11 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 17H17M4 17L13 17"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 12H7L20 12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default HamburgerIcon;

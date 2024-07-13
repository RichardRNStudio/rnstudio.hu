import { IIcon } from '../IIcon.interface';

export const HamburgerIcon = ({ width, height, color }: IIcon) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7L7 7M20 7L11 7"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M20 17H17M4 17L13 17"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M4 12H7L20 12"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

export default HamburgerIcon;

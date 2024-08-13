import classNames from 'classnames';
import { EmojiProps } from './Emoji.types';

const Emoji = ({ label, children, className }: EmojiProps) => (
  <span
    className={classNames('font-emoji', className)}
    role="img"
    aria-label={label}
  >
    {children}
  </span>
);

export default Emoji;

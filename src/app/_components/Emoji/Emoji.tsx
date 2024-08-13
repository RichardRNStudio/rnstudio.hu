import { Noto_Color_Emoji } from 'next/font/google';
import { EmojiProps } from './Emoji.types';
import classNames from 'classnames';

const notoColorEmoji = Noto_Color_Emoji({ subsets: ['emoji'], weight: '400' });

const Emoji = ({ label, children, className }: EmojiProps) => (
  <span
    className={classNames(notoColorEmoji.className, className)}
    role="img"
    aria-label={label}
  >
    {children}
  </span>
);

export default Emoji;

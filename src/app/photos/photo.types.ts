import { EmojiProps } from '../_components/Emoji/Emoji.types';

export type Photo = {
  link: string;
  label: string;
  year: number;
  emoji?: EmojiProps['children'];
  emojiLabel?: EmojiProps['label'];
};

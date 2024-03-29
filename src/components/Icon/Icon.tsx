import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/components/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/components/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/components/BellIcon';
import {BellOnIcon} from '../../assets/icons/components/BellOnIcon';
import {BookmarkFillIcon} from '../../assets/icons/components/BookmarkFillIcon';
import {BookmarkIcon} from '../../assets/icons/components/BookmarkIcon';
import {ChatIcon} from '../../assets/icons/components/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/components/ChatOnIcon';
import {CheckRoundIcon} from '../../assets/icons/components/CheckRoundIcon';
import {ChevronRightIcon} from '../../assets/icons/components/ChevronRightIcon';
import {CommentIcon} from '../../assets/icons/components/CommentIcon';
import {ErrorRoundIcon} from '../../assets/icons/components/ErrorRoundIcon';
import {EyeOffIcon} from '../../assets/icons/components/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/components/EyeOnIcon';
import {FlashOffIcon} from '../../assets/icons/components/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/components/FlashOnIcon';
import {HeartFillIcon} from '../../assets/icons/components/HeartFillIcon';
import {HeartIcon} from '../../assets/icons/components/HeartIcon';
import {HomeFillIcon} from '../../assets/icons/components/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/components/HomeIcon';
import {MessageIcon} from '../../assets/icons/components/MessageIcon';
import {MessageRoundIcon} from '../../assets/icons/components/MessageRoundIcon';
import {MessageRoundLightIcon} from '../../assets/icons/components/MessageRoundLightIcon';
import {NewPostIcon} from '../../assets/icons/components/NewPostIcon';
import {ProfileFillIcon} from '../../assets/icons/components/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/components/ProfileIcon';
import {SearchIcon} from '../../assets/icons/components/SearchIcon';
import {SettingsIcon} from '../../assets/icons/components/SettingsIcon';
import {TrashIcon} from '../../assets/icons/components/TrashIcon';

export interface IconBase {
  color?: string;
  size?: number;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGicon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGicon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGicon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  checkRound: CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  errorRound: ErrorRoundIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  messageRoundLight: MessageRoundLightIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;

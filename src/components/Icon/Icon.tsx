import React from 'react';
import {EyeOnIcon} from '../../assets/icons/components/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/components/EyeOffIcon';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {ArrowLeftIcon} from '../../assets/icons/components/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/components/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/components/BellIcon';
import {BellOnIcon} from '../../assets/icons/components/BellOnIcon';
import {BookmarkIcon} from '../../assets/icons/components/BookmarkIcon';
import {BookmarkFillIcon} from '../../assets/icons/components/BookmarkFillIcon';
import {ChatIcon} from '../../assets/icons/components/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/components/ChatOnIcon';
import {ChevronRightIcon} from '../../assets/icons/components/ChevronRightIcon';
import {CommentIcon} from '../../assets/icons/components/CommentIcon';
import {FlashOffIcon} from '../../assets/icons/components/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/components/FlashOnIcon';
import {HeartIcon} from '../../assets/icons/components/HeartIcon';
import {HeartFillIcon} from '../../assets/icons/components/HeartFillIcon';
import {HomeIcon} from '../../assets/icons/components/HomeIcon';
import {HomeFillIcon} from '../../assets/icons/components/HomeFillIcon';
import {MessageIcon} from '../../assets/icons/components/MessageIcon';
import {NewPostIcon} from '../../assets/icons/components/NewPostIcon';
import {ProfileIcon} from '../../assets/icons/components/ProfileIcon';
import {ProfileFillIcon} from '../../assets/icons/components/ProfileFillIcon';
import {SearchIcon} from '../../assets/icons/components/SearchIcon';
import {SettingsIcon} from '../../assets/icons/components/SettingsIcon';
import {TrashIcon} from '../../assets/icons/components/TrashIcon';
import {Pressable} from 'react-native';
import {CheckRoundIcon} from '../../assets/icons/components/CheckRoundIcon';
import {ErrorRoundIcon} from '../../assets/icons/components/ErrorRoundIcon';
import {MessageRoundIcon} from '../../assets/icons/components/MessageRoundIcon';
import {MessageRoundLightIcon} from '../../assets/icons/components/MessageRoundLightIcon';

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

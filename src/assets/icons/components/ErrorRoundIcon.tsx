import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {IconBase} from '../../../components/Icon/Icon';
import {palette} from '../../../theme/theme';

export function ErrorRoundIcon({
  color = palette.redError,
  size = 48,
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}

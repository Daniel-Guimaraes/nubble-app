import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {ThemeColors, ThemeType} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme<ThemeType>();

  return <RNActivityIndicator color={colors[color]} />;
}
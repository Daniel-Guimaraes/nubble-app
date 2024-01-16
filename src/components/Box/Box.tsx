import React from 'react';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {ThemeType} from '@theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<ThemeType>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<ThemeType> &
  BackgroundColorShorthandProps<ThemeType> &
  LayoutProps<ThemeType> &
  BorderProps<ThemeType> &
  SpacingProps<ThemeType> &
  SpacingShorthandProps<ThemeType> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeType
>(
  [
    backgroundColor,
    backgroundColorShorthand,
    layout,
    border,
    spacing,
    spacingShorthand,
  ],
  TouchableOpacity,
);

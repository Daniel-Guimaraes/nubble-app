import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {ThemeType} from '@theme';

const SRText = createText<ThemeType>();
type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  medium,
  style,
  ...srTextProps
}: TextProps) {
  const fontFamilyAndStyle = getFontFamily(preset, bold, italic, medium);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], fontFamilyAndStyle, style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  medium?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingSmall' ||
    preset === 'headingMedium'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case medium && italic:
      return $fontFamily.mediumItalic;
    case medium:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: {fontFamily: 'Satoshi-Black'},
  blackItalic: {fontFamily: 'Satoshi-BlackItalic'},
  bold: {fontFamily: 'Satoshi-Bold'},
  boldItalic: {fontFamily: 'Satoshi-BoldItalic'},
  italic: {fontFamily: 'Satoshi-Italic'},
  light: {fontFamily: 'Satoshi-Light'},
  lightItalic: {fontFamily: 'Satoshi-LightItalic'},
  medium: {fontFamily: 'Satoshi-Medium'},
  mediumItalic: {fontFamily: 'Satoshi-MediumItalic'},
  regular: {fontFamily: 'Satoshi-Regular'},
};

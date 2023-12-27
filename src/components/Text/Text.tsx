import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
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
  ...rest
}: TextProps) {
  const fontFamilyAndStyle = getFontFamily(preset, bold, italic, medium);

  return (
    <RNText style={[$fontSizes[preset], fontFamilyAndStyle, style]} {...rest}>
      {children}
    </RNText>
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
      return $fontFamily.Regular;
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

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
  black: {fontFamily: 'Satoshi-Black'},
  blackItalic: {fontFamily: 'Satoshi-BlackItalic'},
  bold: {fontFamily: 'Satoshi-Bold'},
  boldItalic: {fontFamily: 'Satoshi-BoldItalic'},
  italic: {fontFamily: 'Satoshi-Italic'},
  light: {fontFamily: 'Satoshi-Light'},
  lightItalic: {fontFamily: 'Satoshi-LightItalic'},
  medium: {fontFamily: 'Satoshi-Medium'},
  mediumItalic: {fontFamily: 'Satoshi-MediumItalic'},
  Regular: {fontFamily: 'Satoshi-Regular'},
};

import React from 'react';
import {Image, Dimensions, StyleProp, ImageStyle} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return (
    <Image source={{uri: imageURL}} resizeMode="cover" style={$imageStyle} />
  );
}

const $imageStyle: StyleProp<ImageStyle> = {
  width: Dimensions.get('screen').width,
  height: 300,
  marginLeft: -24,
};

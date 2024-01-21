import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  const likePost = () => {};

  const navigateToComment = () => {};

  const favoritePost = () => {};

  return (
    <Box flexDirection="row" gap="s24" mt="s16">
      <Item
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
        onPress={likePost}
      />

      <Item
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
        onPress={navigateToComment}
      />

      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
        onPress={favoritePost}
      />
    </Box>
  );
}

interface ItemProps {
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  onPress: () => void;
}

function Item({marked, icon, text, onPress}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      gap="s4"
      alignItems="center"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

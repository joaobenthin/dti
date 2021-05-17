import React from 'react';
import { View } from 'react-native';
import { Avatar, Caption, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { MovieDto } from 'store/modules/movie/types';

interface Props {
  item: MovieDto;
}

function MoviesListItem({ item }: Props): JSX.Element {
  const { navigate } = useNavigation();

  return (
    <List.Item
      testID="movie-list-item"
      onPress={() =>
        navigate('MoviesDetails', {
          movie: item,
        })}
      left={props => <Avatar.Image {...props} source={{ uri: item.Poster }} />}
      title={item.Title}
      right={props => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Caption {...props} style={{ fontSize: 16 }}>
            {item.imdbRating}
          </Caption>
          <List.Icon icon="star" />
        </View>
      )}
    />
  );
}

export { MoviesListItem };

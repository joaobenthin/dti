import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  IconButton,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import { View } from 'react-native';

interface Props {
  route: any;
}

function MoviesDetailsScreen({ route }: Props): JSX.Element {
  const { goBack } = useNavigation();

  const { movie } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <IconButton
        style={{ alignSelf: 'flex-start' }}
        icon="arrow-left"
        onPress={() => goBack()}
        size={36}
      />
      <Avatar.Image
        size={256}
        source={{
          uri: movie.Poster,
        }}
      />
      <Title style={{ marginTop: 12 }}>{movie.Title}</Title>
      <Subheading>{movie.Year}</Subheading>
      <Paragraph>{movie.imdbRating}</Paragraph>
    </View>
  );
}

export { MoviesDetailsScreen };

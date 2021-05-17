import React from 'react';
import { View } from 'react-native';
import { Avatar, Caption, Headline } from 'react-native-paper';

function MoviesListEmpty(): JSX.Element {
  return (
    <View
      style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Avatar.Icon size={64} icon="alert" />
      <Headline>Nenhum filme encontrado</Headline>
      <Caption>Insira algum texto na busca</Caption>
    </View>
  );
}

export { MoviesListEmpty };

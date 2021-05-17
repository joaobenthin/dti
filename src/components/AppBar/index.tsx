import React from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar, Button } from 'react-native-paper';

interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
  searchBarOpen: boolean;
  onOpenSearch: () => void;
  onCloseSearch: () => void;
}

const AppBar = ({
  searchText,
  setSearchText,
  searchBarOpen,
  onOpenSearch,
  onCloseSearch,
}: Props): JSX.Element => {
  return (
    <>
      {searchBarOpen ? (
        <View style={{ flexDirection: 'row' }}>
          <Searchbar
            style={{ flexGrow: 1, margin: 4 }}
            value={searchText}
            onChangeText={setSearchText}
          />
          <Button style={{ justifyContent: 'center' }} onPress={onCloseSearch}>
            Limpar
          </Button>
        </View>
      ) : (
        <Appbar.Header>
          <Appbar.Content title="Movies" />
          <Appbar.Action icon="magnify" onPress={onOpenSearch} />
        </Appbar.Header>
      )}
    </>
  );
};

export { AppBar };

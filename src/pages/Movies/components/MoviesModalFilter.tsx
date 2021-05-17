import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Avatar, Title, Portal, Text, Subheading } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { Pressable, View } from 'react-native';

import { useAppDispatch } from '@store/hooks';
import { movieSlice } from '@store/modules/movie/movieSlice';

function MoviesModalFilter(_props, ref: Ref<Modalize>): JSX.Element {
  const modalRef = useRef<Modalize>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current?.open();
    },
    close: () => {
      modalRef.current?.close();
    },
  }));

  const dispatch = useAppDispatch();

  const handleOrderByTitleASC = useCallback(() => {
    dispatch(movieSlice.actions.titleASC());
    modalRef.current?.close();
  }, [dispatch]);

  const handleOrderByTitleDESC = useCallback(() => {
    dispatch(movieSlice.actions.titleDESC());
    modalRef.current?.close();
  }, [dispatch]);

  const handleOrderByRatingASC = useCallback(() => {
    dispatch(movieSlice.actions.ratingASC());
    modalRef.current?.close();
  }, [dispatch]);

  const handleOrderByRatingDESC = useCallback(() => {
    dispatch(movieSlice.actions.ratingDESC());
    modalRef.current?.close();
  }, [dispatch]);

  return (
    <Portal>
      <Modalize
        ref={modalRef}
        HeaderComponent={
          <Title style={{ textAlign: 'center' }}>Ordenar Por</Title>
        }
        adjustToContentHeight
        childrenStyle={{ marginBottom: 16 }}
      >
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Subheading style={{ marginTop: 16 }}>Ordem Alfabética</Subheading>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Pressable
                onPress={handleOrderByTitleASC}
                style={{ alignItems: 'center', marginRight: 8 }}
              >
                <Avatar.Icon icon="alpha-a" />
                <Text>Crescente</Text>
              </Pressable>
              <Pressable
                onPress={handleOrderByTitleDESC}
                style={{ alignItems: 'center', marginLeft: 8 }}
              >
                <Avatar.Icon icon="alpha-z" />
                <Text>Decrescente</Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Subheading style={{ marginTop: 16 }}>Nota Média</Subheading>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <View style={{ flexDirection: 'row' }}>
                <Pressable
                  onPress={handleOrderByRatingASC}
                  style={{ alignItems: 'center', marginRight: 8 }}
                >
                  <Avatar.Icon icon="star-check" />
                  <Text>Crescente</Text>
                </Pressable>
                <Pressable
                  onPress={handleOrderByRatingDESC}
                  style={{ alignItems: 'center', marginLeft: 8 }}
                >
                  <Avatar.Icon icon="star-outline" />
                  <Text>Decrescente</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </>
      </Modalize>
    </Portal>
  );
}

const MoviesModalFilterComponent = forwardRef(MoviesModalFilter);

export { MoviesModalFilterComponent as MoviesModalFilter };

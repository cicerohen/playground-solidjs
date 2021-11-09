import { createEffect, createResource, createSignal } from 'solid-js';
import { View } from '../../components/View';
import { List } from '../../components/List';
import { ListItem } from '../../components/ListItem';

import { useFetchApi } from '../../hooks/useFetchApi';

export const HomeViewContainer = () => {
  const { data } = useFetchApi('/public/characters');
  return (
    <View title="Home">
      <List>
        <ListItem>dsds</ListItem>
        <ListItem>dsds</ListItem>
      </List>
    </View>
  );
};

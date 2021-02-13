import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { Header } from '~/components';
import CountersContext from '~/contexts/counters';

import Card from './components/Card';
import Styles, { Container, Separator } from './styles';

const Counters = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { counters, loading, indexSelected, changeSelectedCounter } = useContext(CountersContext);

  return (
    <>
      <Header title='Counters' />
      <Container>
        <FlatList
          refreshing={loading}
          onRefresh={() => {}}
          data={counters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item, index }) => {
            const itemIsActive = index === indexSelected;

            return (
              <Card
                item={item}
                isActive={itemIsActive}
                onPress={() => {
                  if (!itemIsActive) {
                    changeSelectedCounter(index);
                  }
                }}
              />
            );
          }}
          style={Styles.list}
          contentContainerStyle={[Styles.contentList, { paddingBottom: tabBarHeight }]}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Container>
    </>
  );
};

export default Counters;

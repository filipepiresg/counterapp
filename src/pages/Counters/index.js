import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { get } from 'lodash';

import { Header } from '~/components';
import CountersContext from '~/contexts/counters';

import Card from './components/Card';
import Styles, { Container, Separator } from './styles';

const Counters = () => {
  const { counters, loading, indexSelected, changeSelectedCounter, updateCounter } = useContext(
    CountersContext
  );

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
                  if (itemIsActive) {
                    updateCounter({ ...item, value: get(item, 'value', 0) + 1 });
                  } else {
                    changeSelectedCounter(index);
                  }
                }}
              />
            );
          }}
          style={Styles.list}
          contentContainerStyle={Styles.contentList}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Container>
    </>
  );
};

export default Counters;

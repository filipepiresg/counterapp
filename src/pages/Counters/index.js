import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { isEmpty, get } from 'lodash';

import CountersContext from '~/contexts/counters';

import { Header } from '../../components';
import Card from './components/Card';
import Styles, { Container, Separator } from './styles';

const Counters = () => {
  const { counters, loading, selectedCounter, changeSelectedCounter, updateCounter } = useContext(
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
            const itemIsActive =
              !isEmpty(selectedCounter) && get(selectedCounter, 'title', '') === get(item, 'title');

            return (
              <Card
                item={item}
                isActive={itemIsActive}
                onPress={() => {
                  if (itemIsActive) {
                    updateCounter({ ...item, value: get(item, 'value', 0) + 1 }, index);
                  } else {
                    changeSelectedCounter(item);
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

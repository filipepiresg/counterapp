import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Message, Submessage } from './styles';

const EmptyCounters = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Message>No counter registered</Message>
      <Submessage>
        Please, go to{' '}
        <Submessage
          isLink
          onPress={() => {
            navigation.jumpTo('Config');
          }}
        >
          Config Tab
        </Submessage>{' '}
        to add a counter
      </Submessage>
    </Container>
  );
};

export default EmptyCounters;

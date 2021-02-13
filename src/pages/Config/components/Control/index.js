import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CountersContext from '../../../../contexts/counters';
import { Colors } from '../../../../styles/index';
import { Container, Content, Title, Value, Button, Row } from './styles';

const Control = ({ item }) => {
  const { updateCounter } = useContext(CountersContext);

  return (
    <Container>
      <Content size={0.5}>
        <Value>{item.value.toString().padStart(4, '0')}</Value>
        <Title>{item.title}</Title>
      </Content>
      <Row>
        <Button
          onPress={() => {
            updateCounter({ ...item, value: item.value + 1 });
          }}
        >
          <AntDesign size={18} color={Colors.CONFIG_BUTTON_TITLE} name='plus' />
        </Button>
        <Button
          onPress={() => {
            updateCounter({ ...item, value: 0 });
          }}
        >
          <AntDesign size={18} color={Colors.CONFIG_BUTTON_TITLE} name='reload1' />
        </Button>
        <Button
          onPress={() => {
            updateCounter({ ...item, value: item.value - 1 });
          }}
        >
          <AntDesign size={18} color={Colors.CONFIG_BUTTON_TITLE} name='minus' />
        </Button>
      </Row>
    </Container>
  );
};

export default Control;

import React, { useContext } from 'react';
import { Col } from 'react-native-easy-grid';

import { isEqual } from 'lodash';

import CountersContext from '~/contexts/counters';

import { Header } from '../../components';
import Styles, {
  Container,
  Title,
  Button,
  ButtonTitle,
  Row,
  ControlCounters,
  ControlTitle,
} from './styles';

const Config = () => {
  const { counters, selectedCounter, addCounter, deleteCounter } = useContext(CountersContext);

  return (
    <>
      <Header title='Config' />
      <Container>
        <Col size={0.5}>
          <Title>Counters</Title>
          <Row>
            <Button
              onPress={() => {
                addCounter(`Counter ${counters.length + 1}`);
              }}
              style={Styles.buttonShadow}
            >
              <ButtonTitle>{`Add\nCounter`}</ButtonTitle>
            </Button>
            <Button
              onPress={() => {
                const indexSelected = counters.findIndex((_counter) =>
                  isEqual(_counter, selectedCounter)
                );

                if (indexSelected >= 0) {
                  deleteCounter(indexSelected);
                }
              }}
              style={Styles.buttonShadow}
            >
              <ButtonTitle>{`Remove\nCounter`}</ButtonTitle>
            </Button>
          </Row>
        </Col>
        <Col size={0.5}>
          <Title>Selected Counter</Title>
          <ControlCounters>
            <ControlTitle>Counter Controls</ControlTitle>
          </ControlCounters>
        </Col>
      </Container>
    </>
  );
};

export default Config;

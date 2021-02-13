import React, { useContext } from 'react';
import { Col } from 'react-native-easy-grid';

import { Header } from '~/components';
import CountersContext from '~/contexts/counters';

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
  const { counters, indexSelected, addCounter, deleteCounter } = useContext(CountersContext);

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
                if (indexSelected >= 0) {
                  deleteCounter();
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

import React, { useContext, useMemo } from 'react';
import { Alert } from 'react-native';
import { Col } from 'react-native-easy-grid';

import { isEmpty, get, last, isNaN } from 'lodash';

import { Header } from '../../components';
import CountersContext from '../../contexts/counters';
import Control from './components/Control';
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

  const isEmptyCounters = useMemo(() => isEmpty(counters[indexSelected]), [
    counters,
    indexSelected,
  ]);

  return (
    <>
      <Header title='Config' />
      <Container>
        <Col size={0.5}>
          <Title>Counters</Title>
          <Row>
            <Button
              onPress={() => {
                const lastTitles = counters.map(({ title }) => Number(last(title.split(' '))));
                const lastTitlesFiltered = lastTitles.filter((lastTitle) => !isNaN(lastTitle));
                const lastNumber = (last(lastTitlesFiltered) || 0) + 1;

                addCounter(`Counter ${lastNumber}`);
              }}
              style={Styles.buttonShadow}
            >
              <ButtonTitle>{`Add\nCounter`}</ButtonTitle>
            </Button>
            <Button
              onPress={() => {
                if (!get(counters, `[${indexSelected}]`, false)) {
                  Alert.alert('Counters empty', 'No counters');
                } else if (indexSelected < 0) {
                  Alert.alert('Counter not seleted', 'No counter has been selected');
                } else {
                  Alert.alert(
                    'Remove counter',
                    `Are you sure you want to delete '${counters[indexSelected].title}'?`,
                    [
                      {
                        text: 'OK',
                        onPress: deleteCounter,
                      },
                      { text: 'Cancel', style: 'destructive' },
                    ],
                    { cancelable: true }
                  );
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
            {isEmptyCounters ? (
              <ControlTitle>Counter Controls</ControlTitle>
            ) : (
              <Control item={counters[indexSelected]} />
            )}
          </ControlCounters>
        </Col>
      </Container>
    </>
  );
};

export default Config;

import React, { useCallback, useContext, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CountersContext from '../../../../contexts/counters';
import { Colors } from '../../../../styles/index';
import { Container, Content, Title, Value, Button, Row, ButtonTitle, Input } from './styles';

const Control = ({ item }) => {
  const [isEditable, setEditable] = useState(false);
  const [newName, setName] = useState('');
  const { updateCounter } = useContext(CountersContext);

  const handleUpdateName = useCallback(() => {
    updateCounter({ ...item, title: newName });
    setEditable(false);
    setName('');
  }, [item, newName, updateCounter]);

  return (
    <Container
      onPress={() => {
        setName(item.title);
        setEditable(true);
      }}
    >
      <Content size={0.5}>
        <Value>{item.value.toString().padStart(4, '0')}</Value>
        {isEditable ? (
          <Input
            value={newName}
            placeholder='Set a new counter name'
            allowFontScaling
            autoCorrect={false}
            onChangeText={setName}
            onSubmitEditing={() => handleUpdateName()}
            returnKeyType='send'
          />
        ) : (
          <Title>{item.title}</Title>
        )}
      </Content>
      <Row>
        {!isEditable ? (
          <>
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
              <ButtonTitle>Reset</ButtonTitle>
            </Button>
            <Button
              onPress={() => {
                updateCounter({ ...item, value: item.value - 1 });
              }}
            >
              <AntDesign size={18} color={Colors.CONFIG_BUTTON_TITLE} name='minus' />
            </Button>
          </>
        ) : (
          <>
            <Button
              isEdit
              onPress={() => {
                handleUpdateName();
              }}
            >
              <ButtonTitle>Change</ButtonTitle>
            </Button>
            <Button
              isEdit
              onPress={() => {
                setEditable(false);
              }}
            >
              <ButtonTitle>Cancel</ButtonTitle>
            </Button>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Control;

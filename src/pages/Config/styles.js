import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.SECONDARY};
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 700;
  color: ${Colors.CONFIG_TITLE};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 15px;
  width: 45%;
  background-color: ${Colors.CARD_ACTIVE};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${Colors.CONFIG_BUTTON_TITLE};
  font-weight: bold;
`;

export const ControlCounters = styled.View`
  flex: 1;
  border-radius: 8px;
  border: 3px dashed ${Colors.CARD_ACTIVE};
  /* align-items: center; */
  justify-content: center;
`;

export const ControlTitle = styled.Text`
  color: ${Colors.CARD_ACTIVE};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export default StyleSheet.create({
  buttonShadow: {
    elevation: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.7,
    shadowColor: Colors.PRIMARY,
  },
});

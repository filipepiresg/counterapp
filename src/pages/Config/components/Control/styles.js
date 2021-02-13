import { opacify, transparentize } from 'polished';
import styled from 'styled-components/native';

import { Colors } from '../../../../styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  background-color: ${opacify(0.8, Colors.SECONDARY)};
  /* border: 1px solid white; */
  /* width: 100%; */
  margin: 10px;
  border-radius: 6px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 5px;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${Colors.CARD_ACTIVE};
  font-size: 36px;
  font-weight: 700;
  flex-wrap: wrap;
`;

export const Value = styled.Text`
  text-align: right;
  color: ${transparentize(0.5, Colors.CARD_ACTIVE)};
  font-size: 28px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${Colors.CARD_ACTIVE};
  width: ${(props) => (props.isEdit ? '45' : '30')}%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${Colors.CONFIG_BUTTON_TITLE};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.CARD_ACTIVE_TITLE,
  underlineColorAndroid: 'transparent',
})`
  color: ${Colors.CONFIG_TITLE};
  font-size: 36px;
  font-weight: 700;
  flex-wrap: wrap;
  padding: 0;
`;

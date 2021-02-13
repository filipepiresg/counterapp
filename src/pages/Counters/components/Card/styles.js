import styled from 'styled-components/native';

import { Colors } from '~/styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  background-color: ${(props) => (props.isActive ? Colors.CARD_ACTIVE : Colors.CARD_INACTIVE)};
  padding: 10px 20px 20px 10px;
  border-radius: 5px;
  /* margin: 20px 0 0; */
`;

export const Title = styled.Text`
  color: ${(props) => (props.isActive ? Colors.CARD_ACTIVE_TITLE : Colors.CARD_INACTIVE_TITLE)};
  font-size: 26px;
  font-weight: bold;
`;

export const Counter = styled.Text`
  color: ${(props) => (props.isActive ? Colors.CARD_ACTIVE_CONTENT : Colors.CARD_INACTIVE_CONTENT)};
  text-align: right;
  font-size: 70px;
  font-weight: bold;
  margin-top: 50px;
`;

import styled from 'styled-components/native';

import { Metrics, Colors } from '../../../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${Metrics.screenHeight * 0.65}px;
`;

export const Message = styled.Text`
  color: ${Colors.TITLE};
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const Submessage = styled.Text`
  text-decoration: ${(props) => (props.isLink ? 'underline' : 'none')};
  color: ${(props) => (props.isLink ? Colors.ICON_ACTIVE : Colors.TITLE)};
  font-size: 18px;
  text-align: center;
  font-weight: ${(props) => (props.isLink ? 'bold' : '300')};
  flex-wrap: wrap;
`;

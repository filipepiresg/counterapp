import styled from 'styled-components/native';

import { Colors } from '../../styles';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.PRIMARY};
`;

export const Title = styled.Text`
  margin: 30px 0 10px 15px;
  font-size: 36px;
  color: ${Colors.TITLE};
  font-weight: bold;
`;

import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.SECONDARY};
`;

export const Separator = styled.View`
  height: 20px;
`;

export default StyleSheet.create({
  contentList: {
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    marginHorizontal: 20,
  },
});

import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { Container, Title, Counter } from './styles';

const Card = ({ item, isActive = false, onPress = () => {} }) => (
  <Container isActive={isActive} onPress={onPress}>
    <Title isActive={isActive}>{item.title}</Title>
    <Counter isActive={isActive}>{item.value.toString().padStart(4, '0')}</Counter>
  </Container>
);

Card.defaultProps = {
  isActive: false,
  onPress: () => {},
};
Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default memo(Card);

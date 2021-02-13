import React from 'react';

import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const Header = ({ title = '' }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Header.defaultProps = {
  title: '',
};
Header.defaultProps = {
  title: PropTypes.string,
};

export default Header;

import React from 'react';

import NavBar from '../../components/NavBar';

import { Container } from './style';

const Default: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Default;
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { Container } from './styles';

const Inspections: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <h1>Inspeções</h1>
      <Button onClick={() => push('inspections/new')}>
        Nova Inspeção
      </Button>
    </Container>
  );
};

export default Inspections;
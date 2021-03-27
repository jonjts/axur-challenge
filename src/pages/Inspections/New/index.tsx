import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

import { FormGroup, Footer } from './styles';

const New: React.FC = () => {
  const { goBack } = useHistory();

  const [keyword, setKeyword] = useState('');

  return (
    <>
      <h1>Nova Inspeção</h1>
      <Card>
        <FormGroup>
          <label>Keyword</label>
          <input
            placeholder='Informe a keyword'
            value={keyword}
            onChange={({ target: { value } }) => setKeyword(value)}
          />
        </FormGroup>
        <Footer>
          <a href='/'>Voltar</a>
          <Button>Salvar</Button>
        </Footer>
      </Card>
    </>
  );
};

export default New;
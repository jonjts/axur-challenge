import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useInspection } from '../../../providers/Inspection';

import Card from '../../../components/Card';

import { FormGroup } from './styles';

const New: React.FC = () => {
  const { goBack } = useHistory();
  const { insert, loading } = useInspection();

  const [keyword, setKeyword] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [keyword]);

  const handleSave = useCallback(async () => {
    try {
      await insert(keyword);
      goBack();
    } catch (error) {
      setHasError(true);
    }
  }, [insert, keyword, goBack]);


  return (
    <>
      <h1>Nova Inspeção</h1>
      <Card
        showBackButton
        showSubmitButton
        backText='Voltar'
        submitText='Salvar'
        onBackClicked={goBack}
        onSubmitClicked={handleSave}
        disableButtons={loading}
      >
        <FormGroup hasError={hasError}>
          <label>Keyword</label>
          <input
            placeholder='Informe a keyword'
            value={keyword}
            onChange={({ target: { value } }) => setKeyword(value)}
          />
        </FormGroup>
      </Card>
    </>
  );
};

export default New;
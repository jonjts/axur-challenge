import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { InspectionResult } from '../../../entities';
import { useInspection } from '../../../providers/Inspection';

import Spinner from '../../../components/Spinner';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

import Results from './Results';

import {
  CardHeader,
  CardBody,
  SpinnerContainer,
  Content
} from './styles';

const Show: React.FC = () => {
  const { goBack } = useHistory();
  const { find, loading } = useInspection();
  const { id } = useParams() as { id?: string };

  const [inspectionId, setInspectionId] = useState<string>(id || '');
  const [inspectionResult, setInspectionResult] = useState({} as InspectionResult);

  const findInspection = useCallback(async () => {
    setInspectionResult({} as InspectionResult);
    const result = await find(inspectionId.trim());
    setInspectionResult(result);
  }, [find, inspectionId]);

  useEffect(() => {
    if (id) findInspection();
  }, [id]);

  return (
    <>
      <h1>Ver Inspeção</h1>
      <Card
        showBackButton
        backText='Voltar'
        onBackClicked={goBack}
        disableButtons={loading}
      >
        <CardHeader>
          {
            !id ? (
              <>
                <input
                  value={inspectionId}
                  onChange={({ target: { value } }) => setInspectionId(value)}
                  placeholder='Informe o id da inspeção'
                />
                <Button onClick={findInspection}>Pesquisar</Button>
              </>
            ) : (
              <h2>
                ID: <i>{id}</i>
              </h2>
            )
          }
        </CardHeader>
        <CardBody className='row'>
          {
            loading ? (
              <SpinnerContainer className='row'>
                <Spinner />
              </SpinnerContainer>
            ) : (
              <Content className='grid'>
                {inspectionResult?.id && <Results result={inspectionResult} />}
              </Content>
            )
          }
        </CardBody>
      </Card>
    </>
  );
};

export default Show;
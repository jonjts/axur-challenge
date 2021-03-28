import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { useInspection } from '../../providers/Inspection';

import Card from '../../components/Card';

import { Container, Content, CardContent } from './styles';

const Inspections: React.FC = () => {
  const { lastInspections } = useInspection();
  const { push } = useHistory();

  return (
    <Container>
      <h2>Inspeções Recentes</h2>
      <Content className='grid'>
        {
          lastInspections.map(({ id, keyword, created_at }) => (
            <Card
              key={id}
              bounce
              pointer
              onClick={() => push(`/inspections/show/${id}`)}
            >
              <CardContent>
                <h3>
                  {keyword}
                </h3>
                <p>
                  {`id: ${id}`}
                </p>
                <small>
                  {`${created_at.toLocaleDateString()} ${created_at.toLocaleTimeString()}`}
                </small>
              </CardContent>
            </Card>
          ))
        }
      </Content>
    </Container>
  );
};

export default memo(Inspections);
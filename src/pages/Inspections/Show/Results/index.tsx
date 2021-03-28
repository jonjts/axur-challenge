import React, { memo, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { InspectionResult, INSPECTION_RESULT_STATUS } from '../../../../entities';

import Button from '../../../../components/Button';

import {
  StatusContainer,
  Indicator,
  StatusName,
  ResultList,
  ListItem
} from './styles';

type Props = {
  result: InspectionResult
};

const Show: React.FC<Props> = ({ result }) => {
  const { colors } = useTheme();

  const colorStatus = useMemo(() => result.status === INSPECTION_RESULT_STATUS.active
    ? colors.secondary
    : colors.success
    , [colors, result.status]);

  const handleOpenResult = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <StatusContainer>
        <div className='row'>
          <div className='column'>
            <label>
              Status
            </label>
            <StatusName className='row'>
              <Indicator
                color={colorStatus}
              />
              <label>
                {result.status}
              </label>
            </StatusName>
          </div>
        </div>
      </StatusContainer>
      <ResultList>
        <h2>Resultados</h2>
        {
          !result.urls.length ? (
            <p>Nenhum resultado encontrado</p>
          ) : (
            result.urls.map(url => (
              <ListItem key={url}>
                <Button
                  isLink
                  onClick={() => handleOpenResult(url)}
                >
                  {url}
                </Button>
              </ListItem>
            ))
          )
        }
      </ResultList>
    </>
  );
};

export default memo(Show);
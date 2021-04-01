import styled from 'styled-components';

export const StatusContainer = styled.div`
    
`;

export const Indicator = styled.div<{ color: string }>`
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    filter: brightness(1);
`;

export const StatusName = styled.div`
    margin-top: ${({ theme: { spacings: { sm } } }) => sm.pixel};
    align-items: center;

    label {
        margin-left: ${({ theme: { spacings: { sm } } }) => sm.pixel};
        text-transform: capitalize;
    }
`;

export const ResultList = styled.div`
    
    h2 {
        margin-top: 0;
    }

    .empty-text {
        text-align: center;
    }
`;

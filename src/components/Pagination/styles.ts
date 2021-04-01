import styled from 'styled-components';

export const Container = styled.div`
`;

export const ListItem = styled.div`
    max-width: 100%;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  

`;

export const Row = styled.div`
    width: 90px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ theme: { spacings: { sm } } }) => sm.pixel};
`;

export const Footer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme: { spacings: { sm } } }) => sm.pixel};
`;
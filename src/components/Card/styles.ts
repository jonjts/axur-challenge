import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: ${({ theme: { spacings: { xl } } }) => xl.pixel};
    background-color: ${({ theme: { colors: { surface } } }) => surface};
    border-radius: ${({ theme: { border } }) => border};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
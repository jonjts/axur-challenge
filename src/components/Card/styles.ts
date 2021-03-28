import styled from 'styled-components';

export const Container = styled.div<{ pointer?: boolean }>`
    min-height: 100px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: ${({ theme: { spacings: { xl } } }) => xl.pixel};
    background-color: ${({ theme: { colors: { surface } } }) => surface};
    border-radius: ${({ theme: { border } }) => border};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor: ${({ pointer }) => pointer ? 'pointer' : 'default'};
    position: relative;
`;

export const Footer = styled.div`
    min-height: 80px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${({ theme: { spacings: { xl } } }) => xl.pixel};
    border-top: 1px solid ${({ theme: { colors } }) => colors.default};

    a {
        margin-right: ${({ theme: { spacings: { lg } } }) => lg.pixel};
    }
`;
import styled from 'styled-components';

export const CardHeader = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.default};

    button {
        margin-left: ${({ theme: { spacings: { sm } } }) => sm.pixel};
    }

    @media (min-width: 0) { 
        flex-direction: column;
        max-height: 200px;

        button {
            margin-bottom: ${({ theme: { spacings: { sm } } }) => sm.pixel};
        }
    }

    @media (min-width: 992px) { 
        flex-direction: row;
        max-height: 70px;

        button {
            margin-bottom: 0;
        }
    }
`;

export const CardBody = styled.div`
    flex: 1;
    min-height: 200px;
    margin-top: ${({ theme: { spacings: { xl } } }) => xl.pixel};
`;

export const Content = styled.div`
    width: 100%;

    @media (min-width: 992px) { 
        grid-template-columns: 50% 50% !important;
    }
`;

export const SpinnerContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

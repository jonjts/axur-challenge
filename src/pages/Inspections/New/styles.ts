import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    input {
        @media (min-width: 0px) {
            width: 100%;
        }

        @media (min-width: 992px) {
            width: 50%;
        }
    }

    :focus {

    }
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
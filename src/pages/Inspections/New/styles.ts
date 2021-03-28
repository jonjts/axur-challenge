import styled from 'styled-components';

export const FormGroup = styled.div<{ hasError?: boolean }>`
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

    label {
        color: ${({ hasError, theme: { colors: { danger, text } } }) => hasError ? danger : text};
    }

    input {
        border: 1px solid ${({ hasError, theme: { colors: { danger, text } } }) => hasError ? danger : text};
        color: ${({ hasError, theme: { colors: { danger, text } } }) => hasError ? danger : text};
    }
`;

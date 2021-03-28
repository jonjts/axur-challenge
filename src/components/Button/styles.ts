import styled from 'styled-components';

export const ButtonContainer = styled.button<{ color?: string }>`
    background-color: ${({ color, theme: { colors: { primary } } }) => color || primary};
`;

export const LinkContainer = styled.button`
    background-color: transparent;
    color: ${({ theme: { colors: { secondary } } }) => secondary};

    :hover {
      opacity: 0.8;
      text-decoration: underline;
      box-shadow: none;
    }

    :active {
        filter: brightness(1);
        background-color: transparent;
        box-shadow: none;
    }

    :focus {
      box-shadow: none;
    }
`;

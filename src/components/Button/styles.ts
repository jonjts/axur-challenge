import styled from 'styled-components';

export const Container = styled.button<{ color?: string }>`
    background-color: ${({ color, theme: { colors: { primary } } }) => color || primary};
`;

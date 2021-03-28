import styled from 'styled-components';

export const Container = styled.div<{ size: string, color?: string }>`
    border: 4px solid #f3f3f3; 
    border-top: 4px solid ${({ color, theme: { colors: { secondary } } }) => color || secondary};
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    animation: spinner 2s linear infinite;
`;

import React from 'react';

import { Container } from './styles';

type Props = {
    color?: string,
    onClick?(): void
};

const Button: React.FC<Props> = ({ children, color, onClick }) => (
    <Container color={color} onClick={onClick}>
        {children}
    </Container>
);

export default Button;
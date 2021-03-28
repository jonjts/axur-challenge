import React from 'react';

import { Container } from './styles';

type Props = {
    title?: string,
    description?: string,
    color?: string
};

const Alert: React.FC<Props> = ({ title, description, color }) => {
    return (
        <Container color={color}>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </Container>
    );
};

export default Alert;
import React, { memo } from 'react';

import { Container } from './styles';

export enum SIZE {
    sm = '20px', md = '50px', lg = '80px'
};

type Props = {
    color?: string,
    size?: SIZE
};

const Spinner: React.FC<Props> = ({ color, size = SIZE.md }) => (
    <Container color={color} size={size} />
);

export default memo(Spinner);
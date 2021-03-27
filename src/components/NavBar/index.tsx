import React from 'react';

import { Container, Brand } from './styles';

import BrandImage from '../../assets/images/brand.svg';

const NavBar: React.FC = () => (
    <Container>
        <a href='/' title='Ir para home'>
            <Brand src={BrandImage} alt='Logo do app: desafio Axur' />
        </a>
    </Container >
);

export default NavBar;
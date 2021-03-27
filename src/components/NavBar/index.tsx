import React from 'react';

import { Container, Brand } from './styles';

import BrandImage from '../../assets/images/brand.svg';

const NavBar: React.FC = () => {
    return (
        <Container>
            <Brand src={BrandImage} alt='Logo do app: desafio Axur'/>
        </Container>
    );
};

export default NavBar;
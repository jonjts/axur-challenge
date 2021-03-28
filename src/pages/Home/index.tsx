import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Inspections from '../Inspections';

import { Container, CardContent } from './styles';

const Home: React.FC = () => {
    const { push } = useHistory();

    return (
        <>
            <h1>Home</h1>
            <Container className='grid'>
                <div >
                    <Card
                        bounce
                        pointer
                        onClick={() => push('inspections/new')}
                    >
                        <CardContent>
                            <h3>Nova Inspeção</h3>
                            <p>Adicione uma nova keyword para iniciar o processo de web crawling.</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card
                        bounce
                        pointer
                        onClick={() => push('inspections/show')}
                    >
                        <CardContent>
                            <h3>Consultar Inspeção</h3>
                            <p>Informe o id de uma inspeção já cadastrada para verificar seus resultados.</p>
                        </CardContent>
                    </Card>
                </div>
                <Inspections />
            </Container>
        </>
    );
};

export default Home;
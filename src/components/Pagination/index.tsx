import React, { useState, useEffect, memo, useMemo } from 'react';

import Button from '../Button';

import { Container, ListItem, Row, Footer } from './styles';

type Props = {
    items: Array<string>,
    onItemClicked(item: string): void,
    itemsPerPage?: number
};

const Pagination: React.FC<Props> = ({ items, onItemClicked, itemsPerPage = 10 }) => {

    const [itemsToShow, setItemsToShow] = useState(new Array<string>());
    const [page, setPage] = useState(1);
    const [disableNextPage, setDisableNextPage] = useState(false);
    const [disabledPreviousPage, setDisablePreviousPage] = useState(false);

    const totalPage = useMemo(() => {
        if (items.length) {
            const total = items.length / itemsPerPage;
            return (total >= 0 && total <= 1) ? 1 : total.toFixed();
        }
        return 1;
    }, [items, itemsPerPage]);

    useEffect(() => {
        setPage(1);
    }, [items]);

    useEffect(() => {
        const total = items.length - 1;
        let limit = page * itemsPerPage;
        let offset = limit - itemsPerPage;

        if (limit > total) {
            limit = total;
            setDisableNextPage(true);
        } else {
            setDisableNextPage(false);
        }

        if (page === 1) {
            setDisablePreviousPage(true);
        } else {
            setDisablePreviousPage(false);
        }

        if (offset < 0) {
            offset = 0;
        }

        setItemsToShow([...items.slice(offset, limit)]);
    }, [items, itemsPerPage, page]);

    return (
        <Container>
            {
                itemsToShow.map(item => (
                    <ListItem key={item}>
                        <Button
                            isLink
                            onClick={() => onItemClicked(item)}
                        >
                            {item}
                        </Button>
                    </ListItem>
                ))
            }
            <Footer data-testid={`${page}-${totalPage}`} >
                <label>{`Página ${page} de ${totalPage}`}</label>
                <Row>
                    <Button
                        disabled={disabledPreviousPage}
                        onClick={() => setPage(page - 1)}
                    >
                        {'<'}
                    </Button>
                    <Button
                        disabled={disableNextPage}
                        onClick={() => setPage(page + 1)}
                    >
                        {'>'}
                    </Button>
                </Row>
            </Footer>
        </Container>
    );
};

export default memo(Pagination);
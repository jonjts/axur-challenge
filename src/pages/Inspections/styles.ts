import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    @media (min-width: 992px) { 
        grid-template-columns: 32% 32% 32% !important;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    small {
        font-size: 11px;
        align-self: flex-end;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
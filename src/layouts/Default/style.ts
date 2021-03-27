import styled from 'styled-components';

export const Container = styled.div`
   @media (min-width: 0px) {
        margin-top: ${({ theme: { spacings: { sm } } }) => sm.percent};
        margin-bottom: ${({ theme: { spacings: { sm } } }) => sm.percent};
        padding: ${({ theme: { spacings: { xs } } }) => `0 ${xs.percent} 0 ${xs.percent}`};
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        margin-top: ${({ theme: { spacings: { xxl } } }) => xxl.pixel};
        margin-bottom: ${({ theme: { spacings: { xxl } } }) => xxl.pixel};
        padding: ${({ theme: { spacings: { lg } } }) => `0 ${lg.percent} 0 ${lg.percent}`};
     }
`;

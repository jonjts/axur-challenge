import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme: { spacings: { sm } } }) => sm.pixel};
`;
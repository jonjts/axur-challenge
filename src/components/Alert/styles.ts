import styled from 'styled-components';

export const Container = styled.div<{ color?: string }>`
  max-width: 80%;
  width: 400px;
  height: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme: { spacings: { sm, lg } } }) => `${lg.pixel} ${sm.pixel} ${sm.pixel} ${lg.pixel}`};
  background-color: ${({ color, theme: { colors } }) => color || colors.danger};
  border-radius: ${({ theme: { border } }) => border};
  z-index: 1;
  position: absolute;
  top: 8%;
  right: 10%;
  animation-name: alert-incoming;
  animation-duration: 0.8s;

  h2 {
      margin: 0%;
      color: #FFF;
  }

  p {
      color: #FFF;
  }
`;

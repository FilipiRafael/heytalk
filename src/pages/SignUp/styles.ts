import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: url('/images/signup-background.svg');
`;

export const BrandStyled = styled.img`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;

  margin: auto;
`;

export const VectorStyled = styled.img`
  position: absolute;
  bottom: 5rem;
  left: 0;
  z-index: 1;
  margin: auto;
  width: 920px;

  animation: pulse;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`;

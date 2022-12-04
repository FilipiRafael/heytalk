 import styled from 'styled-components';

 export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;

  width: 140px;
  height: 30px;

  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 0.2rem;

  cursor: pointer;

  span {
    font-size: 0.80rem;
    font-weight: 300;
    color: ${props => props.theme.colors.hoverText};
  }

  &:hover {
    background-color: ${props => props.theme.colors.buttonBackgroundOnHover};
  }
 `;
import styled from 'styled-components';

interface FavoriteButtonStyled {
  favorited: boolean;
  onClick: () => void;
}

export const Button = styled.button<FavoriteButtonStyled>`
  background-color: ${props => props.favorited ? '#FF6251' : props.theme.colors.placeholderText};
  display: inline-block;
  height: 15px;
  margin: 0 10px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
  width: 15px;

  cursor: pointer;

  &:before,
  &:after {
    content: "";
    background-color: ${props => props.favorited ? '#FF6251' : props.theme.colors.placeholderText};
    border-radius: 50%;
    height: 15px;
    position: absolute;
    width: 15px;
  }

  &:before {
    top: -10px;
    left: 0;
  }

  &:after {
    left: 10px;
    top: 0;
  }
`;

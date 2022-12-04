import styled from 'styled-components';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const Button = styled.a`
  width: 120px;
  height: 40px;
  background-color: ${props => props.theme.colors.buttonBackground};
  border-radius: 2rem;
  cursor: pointer;

  position: sticky;
  bottom: 1rem;
  left: 1rem;

  font-size: 0.95rem;
  color: ${props => props.theme.colors.buttonTextColor};
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const HelpIcon = styled(HelpOutlineIcon)`
  color: ${props => props.theme.colors.buttonTextColor};
`;
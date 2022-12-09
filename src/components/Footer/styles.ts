import styled from 'styled-components';

import {
  GitHub,
  Instagram,
  Web,
  LinkedIn
} from '@mui/icons-material';

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${props => props.theme.colors.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const GitHubIcon = styled(GitHub)`
  font-size: 1.5rem !important;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s !important;
  color: ${props => props.theme.colors.normalText} !important;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const InstagramIcon = styled(Instagram)`
  font-size: 1.5rem !important;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s !important;
  color: ${props => props.theme.colors.normalText} !important;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const WebIcon = styled(Web)`
  font-size: 1.5rem !important;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s !important;
  color: ${props => props.theme.colors.normalText} !important;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const LinkedInIcon = styled(LinkedIn)`
  font-size: 1.5rem !important;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s !important;
  color: ${props => props.theme.colors.normalText} !important;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Link = styled.a`
  text-transform: none;
`;

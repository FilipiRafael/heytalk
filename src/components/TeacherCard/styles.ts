import styled from 'styled-components';

interface ActionButtonProps {
  primary: boolean;
}

interface TagProps {
  isDarkTheme: boolean;
}

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 400;

  cursor: pointer;

  padding: 0.5rem 1.2rem;
  margin-right: 0.5rem;

  border-radius: 0.2rem;

  color: ${props => 
    props.primary ? 
      '#FFF' : '#3D3D3D'
  };
  
  background-color: ${props => 
    props.primary ? 
      props.theme.colors.buttonBackground : '#DDDDDD'
  };

  transform: translateY(50px);
  opacity: 0;
`;

export const Card = styled.div`
  width: 400px;
  height: 220px;

  cursor: pointer;

  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 0.8rem;

  position: relative;

  border: 1px solid ${props => props.theme.colors.cardBorderColor};
  border-radius: 0.5rem;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    border-top-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;

    border: 1px solid ${props => props.theme.colors.buttonBackground};
  }

  &:hover ${ActionButton} {
    transform: translateY(10px);
    opacity: 1;
  }

  &:hover ${Avatar} {
    border-top-left-radius: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
`;

export const FavoriteWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const BioWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;

  position: relative;
`;

export const OnlineIcon = styled.div`
  width: 13px;
  height: 13px;

  background-color: #96C45E;
  border-radius: 0.15rem;

  border: 2px solid transparent;
  
  position: absolute;
  left: -4px;
  bottom: -4px;
`;

export const TeacherName = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.boldText};

  margin-bottom: 0.2rem;
`;

export const TeacherFlag = styled.img`
  width: 28px;
  height: 20px;
  border-radius: 0.2rem;
`;

export const TeacherCountry = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.normalText}
`;

export const TeacherAbout = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
  color: ${props => props.theme.colors.normalText};

  margin: 1rem 0;
`;

export const Tag = styled.span<TagProps>`
  font-size: 0.8rem;
  font-weight: 300;
  color: ${props => props.isDarkTheme ? '#000' : '#000'};

  margin-top: 0.8rem;
  padding: 0.5rem;
  background-color: #DDD;

  border-radius: 0.2rem;
`;
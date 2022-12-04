import { 
  Card,
  Avatar,
  AvatarWrapper,
  OnlineIcon,
  FlexWrapper,
  FavoriteWrapper,
  BioWrapper,
  InfoWrapper,
  TeacherName,
  TeacherCountry,
  TeacherFlag,
  TeacherAbout,
  ActionButton,
  ButtonWrapper,
  Tag
} from './styles';

import { FavoriteButton } from '../../components/FavoriteButton';

import { ITeacherListProps } from '../../types/shared';

interface TeacherCardProps extends ITeacherListProps {
  handleUpdateFavoriteList: (id: number) => void;
  isDarkTheme: boolean;
}

export const TeacherCard = ({
  name,
  country,
  flag,
  photo,
  about,
  favorite,
  online,
  handleUpdateFavoriteList,
  id,
  tag,
  isDarkTheme
}: TeacherCardProps) => {
  return (
    <Card>
      <FavoriteWrapper>
        <FavoriteButton
          favorited={favorite}
          handleUpdateFavoriteList={handleUpdateFavoriteList}
          id={id}
        />
      </FavoriteWrapper>
      <BioWrapper>
        <AvatarWrapper>
          <Avatar src={photo} alt='Teacher avatar' />
          {online && <OnlineIcon />}
        </AvatarWrapper>
        <InfoWrapper>
          <TeacherName>{name}</TeacherName>
          <FlexWrapper>
            <TeacherFlag src={flag} alt='Country Flag' />
            <TeacherCountry>{country}</TeacherCountry>
          </FlexWrapper>
          <Tag isDarkTheme={isDarkTheme}>{tag}</Tag>
        </InfoWrapper>
      </BioWrapper>
      <TeacherAbout>{about}</TeacherAbout>
      <ButtonWrapper>
        <ActionButton primary={false}>Perfil</ActionButton>
        <ActionButton primary={true}>Ligar</ActionButton>
      </ButtonWrapper>
    </Card>
  )
}
import { useState } from 'react';
import { 
  Banner,
  Title,
  Wrapper,
  Subtitle,
  Container,
  OnlineTag,
  FavoritesTag,
  SearchField,
  SearchIconField,
  InputField,
  FlexWrapper,
  TagsWrapper,
  DisponibilityTitle,
  TeachersList
} from './styles';

import { Navbar } from '../../components/Navbar';
import { SupportButton } from '../../components/SupportButton';
import { Tag } from '../../components/Tag'; 
import { TeacherCard } from '../../components/TeacherCard';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

import teacherListApi from '../../mocks/teachers.json';

import { ITeacherListProps } from '../../types/shared';

export const Home = () => {

  const [teacherList, setTeacherList] = useState<ITeacherListProps[]>(teacherListApi);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const handleUpdateFavoriteList = (id: number) => {

    const teacherIndex = teacherList.findIndex((teacher) => {
      return teacher.id === id;
    })

    const newList = [...teacherList];
    newList[teacherIndex].favorite = !newList[teacherIndex].favorite

    setTeacherList(newList);
  }
 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar isDarkTheme={isDarkTheme} changeTheme={setIsDarkTheme} />
      <Banner>
        <Title>Welcome back, Filipi</Title>
      </Banner>

      <Container>
        <FlexWrapper>
          <Wrapper>
            <Subtitle>Encontre um professor</Subtitle>
            <OnlineTag>On-line</OnlineTag>
            <FavoritesTag>Favoritos</FavoritesTag>
          </Wrapper>
          <Wrapper>
            <SearchField>
              <SearchIconField />
              <InputField
                placeholder='Nome, idioma, hobby'
              />
            </SearchField>
          </Wrapper>
        </FlexWrapper>

        <TagsWrapper>
          <Tag text='Escolha o currículo' />
          <Tag text='Nível de aula' />
          <Tag text='Sotaque' />
          <Tag text='Personalidade' />
          <Tag text='Disponibilidade' />
        </TagsWrapper>
      </Container>

      <Container>
        <Wrapper>
            <DisponibilityTitle>Professores disponíveis</DisponibilityTitle>
        </Wrapper>

        <TeachersList>
          {teacherList.map((teacher) => (
            <TeacherCard
              handleUpdateFavoriteList={handleUpdateFavoriteList}
              key={teacher.id}
              id={teacher.id}
              name={teacher.name}
              photo={teacher.photo}
              about={teacher.about}
              flag={teacher.flag}
              country={teacher.country}
              favorite={teacher.favorite}
              online={teacher.online}
            />
          ))}
        </TeachersList>
      </Container>

      <SupportButton />
    </ThemeProvider>
  )
}
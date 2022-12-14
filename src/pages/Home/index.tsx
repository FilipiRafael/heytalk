import { useState, useEffect } from 'react';
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
import { Tag } from '../../components/Tag'; 
import { TeacherCard } from '../../components/TeacherCard';
import { Footer } from '../../components/Footer';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

import teacherListApi from '../../mocks/teachers.json';

import { ITeacherListProps } from '../../types/shared';

export const Home = () => {

  const [teacherList, setTeacherList] = useState<ITeacherListProps[]>(teacherListApi);

  const [teacherFilteredList, setTeacherFilteredList] = useState(teacherListApi);
  const [mainFilter, setMainFilter] = useState<'online' | 'favorite'>('online');
  const [searchText, setSearchText] = useState<string>('');

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const handleUpdateFavoriteList = (id: number) => {
    const teacherIndex = teacherList.findIndex((teacher) => {
      return teacher.id === id;
    })

    const newList = [...teacherList];
    newList[teacherIndex].favorite = !newList[teacherIndex].favorite

    setTeacherList(newList);
  }

  const handleFilterByTag = (tag: string) => {
    const teacherListFiltered = teacherList.filter((teacher) => teacher.tag === tag);
    setTeacherFilteredList(teacherListFiltered);
  }

  useEffect(() => {
    const mainFilterList = teacherList.filter((teacher) => mainFilter === 'online' ? teacher.online : teacher.favorite);
    setTeacherFilteredList(mainFilterList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainFilter]);

  useEffect(() => {
    if (searchText) {
      const filteredList = teacherFilteredList.filter((teacher) => 
        teacher.name.toLowerCase().includes(searchText.toLowerCase()) ||
        teacher.country.toLowerCase().includes(searchText.toLowerCase()) ||
        teacher.about.toLowerCase().includes(searchText.toLowerCase())
      );

      setTeacherFilteredList(filteredList);
    } else {
      setTeacherFilteredList(teacherList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar isDarkTheme={isDarkTheme} changeTheme={setIsDarkTheme} />
      <Banner>
        <Title>Hey Filipi, let's talk?</Title>
      </Banner>

      <Container>
        <FlexWrapper>
          <Wrapper>
            <Subtitle>Conhe??a novas pessoas</Subtitle>
            <OnlineTag
              mainFilter={mainFilter}
              onClick={() => setMainFilter('online')}
            >
              On-line
            </OnlineTag>
            <FavoritesTag
              mainFilter={mainFilter}
              onClick={() => setMainFilter('favorite')}
            >
              Favoritos
            </FavoritesTag>
          </Wrapper>
          <Wrapper>
            <SearchField>
              <SearchIconField />
              <InputField
                placeholder='Nome, idioma, hobby'
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </SearchField>
          </Wrapper>
        </FlexWrapper>

        <TagsWrapper>
          <Tag 
            setFilteredList={() => setTeacherFilteredList(teacherList)}
            filter={handleFilterByTag}
          />
        </TagsWrapper>
      </Container>

      <Container>
        <Wrapper>
            <DisponibilityTitle>Pessoas online agora</DisponibilityTitle>
        </Wrapper>

        <TeachersList>
          {teacherFilteredList.length > 0 ? (
            teacherFilteredList.map((teacher) => (
              <TeacherCard
                isDarkTheme={isDarkTheme}
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
                tag={teacher.tag}
              />
            ))
          ) : (
            teacherList.map((teacher) => (
              <TeacherCard
                isDarkTheme={isDarkTheme}
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
                tag={teacher.tag}
              />
            ))
          )}
        </TeachersList>
      </Container>

      <Footer />
    </ThemeProvider>
  )
}
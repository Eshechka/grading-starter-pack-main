import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import QuestsCatalog from './components/quests-catalog/quests-catalog';
import * as S from './home.styled';
import { useEffect } from 'react';
import { fetchQuests } from 'store/api-actions';
import { useAppDispatch, useAppSelector } from 'hooks';

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { quests, loading } = useAppSelector(state => state.quests);

  useEffect(() => {
    dispatch(fetchQuests());
  }, [])

  useEffect(() => {
    console.log('quests', quests);

  }, [quests])

  return (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      { quests && <QuestsCatalog quests={quests}/> }
    </S.Main>
  </MainLayout>
)};

export default HomePage;

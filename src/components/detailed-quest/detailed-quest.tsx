import { useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchQuest } from 'store/api-actions';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from 'store';
import { Genre, Level } from 'const';

const DetailedQuest = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  const { quest, loading } = useAppSelector(state => state.quests);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    dispatch(fetchQuest({id}));
  }, [])

  return (
    <MainLayout>
     { !loading && quest &&
      <S.Main>
        <S.PageImage
          src={`${BACKEND_URL}/${quest['coverImg']}`}
          alt={`Квест ${quest['title']}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest['title']}</S.PageTitle>
            <S.PageSubtitle>{Genre[quest['type']]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest['duration']} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest['peopleCount'][0]}-{quest['peopleCount'][1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{Level[quest['level']]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest['description']}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClose={() => {setIsBookingModalOpened(false)}}/>}
      </S.Main>}
    </MainLayout>
  );
};

export default DetailedQuest;

import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useState } from 'react';
import { Quest } from 'types/quest';
import { Genre, Genres, Level } from 'const';

type questsCatalogProps = {
  quests: Quest[],
};


const QuestsCatalog = (props: questsCatalogProps): JSX.Element => {
  const [isActive, setIsActive] = useState('all');

  const [filteredList, setFilteredList] = useState([...props.quests]);

  const tabClickHandle = (type: string) => {
    if (type === 'all') {
      setFilteredList([...props.quests]);
    } else {
      setFilteredList(props.quests.filter((item) => {
        return item.type === type;
      }));
    }
    setIsActive(type);
  };

  return(
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn isActive={isActive === 'all'} onClick={() => tabClickHandle('all')}>
            <IconAllQuests />
            <S.TabTitle>{Genre[Genres.all]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={isActive === 'adventure'} onClick={() => tabClickHandle('adventure')}>
            <IconAdventures />
            <S.TabTitle>{Genre[Genres.adventure]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={isActive === 'horror'} onClick={() => tabClickHandle('horror')}>
            <IconHorrors />
            <S.TabTitle>{Genre[Genres.horror]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={isActive === 'mystic'} onClick={() => tabClickHandle('mystic')}>
            <IconMystic />
            <S.TabTitle>{Genre[Genres.mystic]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={isActive === 'detective'} onClick={() => tabClickHandle('detective')}>
            <IconDetective />
            <S.TabTitle>{Genre[Genres.detective]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={isActive === 'scifi'} onClick={() => tabClickHandle('scifi')}>
            <IconScifi />
            <S.TabTitle>{Genre[Genres.scifi]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {filteredList && filteredList.map((item) => (
            <S.QuestItem key={item.id}>
              <S.QuestItemLink to={`/quest/${item.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={item.previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${item.title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{item.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {item.peopleCount[0]}-{item.peopleCount[1]} чел
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {Level[item.level]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )
        )}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;

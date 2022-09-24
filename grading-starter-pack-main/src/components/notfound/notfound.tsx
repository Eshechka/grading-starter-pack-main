import { MainLayout, PageSubtext } from '../common/common';
import * as S from './notfound.styled';

const NotFound = (): JSX.Element => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.NotFound>
          Страница не найдена
        </S.NotFound>
        <S.NavLink to='/'>
          На главную
        </S.NavLink>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFound;

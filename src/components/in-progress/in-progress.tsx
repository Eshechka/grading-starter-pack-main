import { MainLayout, PageSubtext } from '../common/common';
import * as S from './in-progress.styled';

const InProgress = (): JSX.Element => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.NotFound>
          Страница в разработке...
        </S.NotFound>
        <S.NavLink to='/'>
          На главную
        </S.NavLink>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default InProgress;

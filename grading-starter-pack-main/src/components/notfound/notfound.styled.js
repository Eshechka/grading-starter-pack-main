import styled from 'styled-components';
import { Link } from "react-router-dom";
import { PageHeading as Heading } from 'components/common/common';
import contactsBg from 'assets/img/contacts-bg.jpg';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 46px;
  padding-bottom: 29px;
  padding-left: 6px;

  border-bottom: 0.5px solid rgba(230, 230, 230, 0.25);
`;

const NotFound = styled.div`
  display: flex;
  font-size: 26px;
`;

const NavLink = styled(Link)`
  display: flex;
  margin-top: 36px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.tangerine};
`;


export {
  Main,
  ContentWrapper,
  PageHeading,
  NotFound,
  NavLink,
};

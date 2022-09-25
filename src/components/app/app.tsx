import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import NotFound from '../notfound/notfound';
import { appTheme } from './common';
import * as S from './app.styled';
import InProgress from 'components/in-progress/in-progress';


const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/quest/:id">
          <DetailedQuest />
        </Route>
        <Route exact path="/newbie">
          <InProgress />
        </Route>
        <Route exact path="/reviews">
          <InProgress />
        </Route>
        <Route exact path="/promotions">
          <InProgress />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

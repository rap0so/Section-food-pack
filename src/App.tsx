import { ApolloProvider } from '@apollo/react-hooks';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Loading from 'components/Loading';
import apolloClient from 'helpers/apolloClient';
import theme, { GlobalStyle } from 'providers/theme';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loading full={true} />}>
        <Router>
          <Switch>
            <Route path="/" component={lazy(() => import('pages/home'))} />

            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

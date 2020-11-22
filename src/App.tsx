import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WithApollo from './hoc/withApollo';
import WithLayout from './hoc/withLayout';
import Characters from './pages/Characters';
import Home from './pages/Home';
import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

const App: React.FC = () => {
  return (
    <WithApollo>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <WithLayout>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/characters" component={Characters} />
            </Switch>
          </WithLayout>
        </Theme>
      </BrowserRouter>
    </WithApollo>
  );
};

export default App;

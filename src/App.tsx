import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WithApollo from './hoc/withApollo';
import WithLayout from './hoc/withLayout';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Home from './pages/Home';
import Locations from './pages/Locations';
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
              <Route path="/locations" component={Locations} />
              <Route path="/episodes" component={Episodes} />
            </Switch>
          </WithLayout>
        </Theme>
      </BrowserRouter>
    </WithApollo>
  );
};

export default App;

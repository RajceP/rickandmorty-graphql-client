import React from 'react';
import WithApollo from './hoc/withApollo';
import Characters from './pages/Characters';
import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

const App: React.FC = () => {
  return (
    <WithApollo>
      <Theme>
        <GlobalStyle />
        <Characters />
      </Theme>
    </WithApollo>
  );
};

export default App;

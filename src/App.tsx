import React from 'react';
import WithApollo from './hoc/withApollo';
import Characters from './pages/Characters';
import GlobalStyle from './styles/Global';

const App: React.FC = () => {
  return (
    <WithApollo>
      <GlobalStyle />
      <Characters />
    </WithApollo>
  );
};

export default App;

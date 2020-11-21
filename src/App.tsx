import React from 'react';
import styled from 'styled-components';
import WithApollo from './hoc/withApollo';
import Characters from './pages/Characters';
import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

const AppContainer = styled.main`
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <WithApollo>
      <Theme>
        <GlobalStyle />
        <AppContainer>
          <Characters />
        </AppContainer>
      </Theme>
    </WithApollo>
  );
};

export default App;

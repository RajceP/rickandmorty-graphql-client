import React from 'react';
import WithApollo from './hoc/withApollo';
import Characters from './pages/Characters';

const App: React.FC = () => {
  return (
    <WithApollo>
      <Characters />
    </WithApollo>
  );
};

export default App;

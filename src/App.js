import React from 'react';
import { Div } from './components/Div';
import { H1 } from './components/H1';
import { AppContext } from './contexts/app';

function App() {
  return (
    <AppContext>
      <Div>
        <H1 />
      </Div>
    </AppContext>
  );
}

export default App;

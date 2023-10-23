import React from 'react';
import './App.css';

import useRoutes from './router/routes';



function App(): JSX.Element {
  const routes = useRoutes();

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

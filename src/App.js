import React from 'react';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import { Provider } from './store';

function App() {
  return (
    <Provider>
       <Header />
       <Home />
    </Provider>
  );
}

export default App;

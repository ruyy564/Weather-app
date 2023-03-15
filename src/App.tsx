import React from 'react';

import SearchContainer from './containers/SearchContainer';
import CardContainer from './containers/CardContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <CardContainer />
    </div>
  );
}

export default App;

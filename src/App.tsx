import React from 'react';

import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';
import CardContainer from './containers/CardContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContainer />
      <CardContainer />
    </div>
  );
}

export default App;

import React from 'react';
import ListContainer from './containers/ListContainer';
import SearchContainer from './containers/SearchContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <ListContainer />
    </div>
  );
}

export default App;

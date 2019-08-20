import React from 'react';
import ListContainer from './containers/ListContainer';
import SearchContainer from './containers/SearchContainer'
import './App.css';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <ListContainer />
    </div>
  );
}

export default App;

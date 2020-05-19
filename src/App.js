import React from 'react';
import './App.css';
import TitlePane from './components/TitlePaneComponent';
import ListPane from './components/ListPaneComponent';
import DetailPane from './components/DetailPaneComponent';

function App() {
  return (
    <div className="appContainer">
      <div className="mainPane">
          <TitlePane />
          <ListPane />
      </div>
      <DetailPane />
    </div>
  );
}

export default App;

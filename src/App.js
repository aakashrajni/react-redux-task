import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores';
import './App.css';
import MainView from './components/MainView';

function App() {

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}

export default App;

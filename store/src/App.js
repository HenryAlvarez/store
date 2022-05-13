import React from 'react';
import './App.css';
import CardList from './components/cards/CardList';
import Header from './components/Header/Header';
import Login from './views/Login/Login';

function App() {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;

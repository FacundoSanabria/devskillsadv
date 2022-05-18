import './App.css';
import React from 'react'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Router from './components/Router';
import Main from './components/Layout/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Router/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;

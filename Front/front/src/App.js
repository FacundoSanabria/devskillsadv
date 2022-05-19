import './App.css';
import React, { useEffect } from 'react'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Router from './components/Router';
import Main from './components/Layout/Main';
import { axiosInterceptors } from './AxiosInterceptors';

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

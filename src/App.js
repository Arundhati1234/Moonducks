import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import TitleBar from './components/TitleBar';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="base">
      <TitleBar/>
      <Header/>
      <Container/>
      <Footer/>
      </div>
    </>
  );
}

export default App;

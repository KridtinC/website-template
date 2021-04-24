import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
        <Body></Body>
      </div>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

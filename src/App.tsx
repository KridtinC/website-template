import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './components/Footer';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
        // duration : 5000
    });
}, []);
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

import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import AOS from 'aos';
import AppRouter from './components/AppRouter';

function App() {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <div style={{ width: "100%" }}>
          <AppRouter></AppRouter>
        </div>
      </div>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

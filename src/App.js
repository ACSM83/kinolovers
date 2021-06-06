import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import {GlobalProvider} from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <Menu />
        <Footer />
      </div>
    </GlobalProvider>
  );
}
export default App;

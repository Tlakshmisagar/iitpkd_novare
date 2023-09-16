import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Captions from './components/Captions'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Captions />
      </main>
    </div>
  );
}

export default App;

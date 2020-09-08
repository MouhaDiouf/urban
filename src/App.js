import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    //BEM
    <div className="app">
      <h1>Let's build an amazon clone</h1>
      {/* Header */}
      <Header />
      {/* Home component */}
    </div>
  );
}

export default App;

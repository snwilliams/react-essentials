import React from 'react';
import './App.css';

function Header () {
  return (
    <h1>Sara Williams</h1>
  );
}

function Main () {
  return (
    <h2>Software Developer</h2>
  );
}

function Footer () {
  return(
    <h3>sara.williams.n@gmail.com  |  (970) 412-4699  |  GitHub</h3>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

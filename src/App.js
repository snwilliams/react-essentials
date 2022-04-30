import React from 'react';
import './App.css';

function Header (props) {
  console.log(props);
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

function Main () {
  return (
    <h2>Software Developer</h2>
  );
}

function Footer (props) {
  return(
    <h3>Copyright {props.year}  |  sara.williams.n@gmail.com  |  (970) 412-4699  |  GitHub</h3>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Sara"/>
      <Main />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

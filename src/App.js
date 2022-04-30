import React from 'react';
import './App.css';
import leif from "./leif.jpg";

function Header (props) {
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

function Main (props) {
  return (
    <section>
      <p>We serve the most delicious food around</p>
      <img src={leif} height={200} alt="a Great Pyrenees stands in a snowy yard"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish)=> (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer (props) {
  return(
    <h3>Copyright {props.year}  |  sara.williams.n@gmail.com  |  (970) 412-4699  |  GitHub</h3>
  );
}

//How to make an array
const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Misir Wat",
  "Tuna Rice Bowls"
];

//Transform array into object that has dishes in it, with each one having a key
const dishObject = dishes.map((dish, i) => ({id: i, title: dish}));



function App() {
  return (
    <div className="App">
      <Header name="Sara"/>
      <Main dishes={dishObject}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

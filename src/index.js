import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [mostImportantItem, secondMostImportantItem] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem);
console.log(secondMostImportantItem);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App authorized={true}/>
);


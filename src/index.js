import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './routes';


const App = () => {
  return (
    <div style={{overflowY:'hidden'}}>
      <Routes/>
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

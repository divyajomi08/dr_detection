import React from 'react';
import ReactDOM from 'react-dom';
import PrescriptionCard from './components/Cards/PrescriptionCard';
import PrescriptionList from './components/PrescriptionList';
const App = () => {

  return (
    <div className="ui container">
      <br/><br/>
      <PrescriptionCard/>
      <PrescriptionList/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

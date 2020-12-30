import React from 'react';
import ReactDOM from 'react-dom';
import PrescriptionCard from './component/PrescriptionCard';
import PrescriptionList from './component/PrescriptionList';
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

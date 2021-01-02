import React from 'react';
import ReactDOM from 'react-dom';
import PrescriptionCard from './components/PrescriptionCard';
import PrescriptionList from './components/PrescriptionList';
import Detailsform from './components/Detailsform';

const App = () => {

  return (
    <div className="ui container">
      {/* <PrescriptionCard />
      <PrescriptionList /> */}
      <Detailsform/>
      
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from './layouts/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Patient from './views/PatientAnalysis';
import Support from './views/Support';
import Prescription from './views/Prescription';
import './App.css';
import Detailsform from './components/Detailsform';
import Doctorform from './components/Doctorsdetailform';
import Doctordetails from './components/Doctordetails';

const App = () => {
  return (   
    <div>
      {/* <DashboardLayout /> */}
      {/*Test Components Here*/}
      {/* <Detailsform/>*/}
      <Doctorform/>
      <Doctordetails/>
      {/* <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/prescription' component={Prescription} />
          <Route path='/patient' component={Patient} />
          <Route path='/support' component={Support} />
        </Switch>
      </BrowserRouter> */}
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

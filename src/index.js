import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from './layouts/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Patient from './views/PatientAnalysis';
import Support from './views/Support';
import Prescription from './views/Prescription';
import './App.css';

const App = () => {
  return (
    <div>
      <DashboardLayout />
      {/*Test Components Here*/}
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/prescription' component={Prescription} />
          <Route path='/patient' component={Patient} />
          <Route path='/support' component={Support} />
        </Switch>
      </BrowserRouter>
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

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

const App = () => {
  return (   
    <div>
      {/* <DashboardLayout /> */}
      {/*Test Components Here*/}
<<<<<<< HEAD
      <BrowserRouter>
=======
      <Detailsform/>
      {/* <BrowserRouter>
>>>>>>> ddaabb5a9c3f3c3d0aafa0b3ead36a0d02664fcb
        <Switch>
          <Route path='/' exact component={Dashboard} />
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

import React from 'react'
import Dashboard from './views/Dashboard';
import Analysis from './views/PatientAnalysis';
import Patient from './views/Patient';
import Support from './views/Support';
import  {BrowserRouter,Switch,Route}  from 'react-router-dom';
import DashboardLayout from './layouts/Layout';
import Error from './views/Error';
import Profile from './views/Profile';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route render={(props)=>(
            <DashboardLayout {...props}>
                <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/patient" exact component={Patient} />
                <Route path="/patient/285467" component={Analysis} />
                <Route path="/profile" component={Profile} />
                <Route path="/support" component={Support} />
                <Route component={Error} />
            </Switch>
            </DashboardLayout>
            
            )}/>
        </BrowserRouter>
    );
}

export default Routes;
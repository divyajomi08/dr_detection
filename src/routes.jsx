import React from 'react'
import Dashboard from './views/Dashboard';
import Patient from './views/PatientAnalysis';
import Prescription from './views/Prescription';
import Support from './views/Support';
import  {BrowserRouter,Switch,Route}  from 'react-router-dom';
import DashboardLayout from './layouts/Layout';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route render={(props)=>(
            <DashboardLayout {...props}>
                <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/patient" component={Patient} />
                <Route path="/prescription" component={Prescription} />
                <Route path="/support" component={Support} />
                {/* <Route component={NotFound} /> */}
            </Switch>
            </DashboardLayout>
            
            )}/>
        </BrowserRouter>
    );
}

export default Routes;
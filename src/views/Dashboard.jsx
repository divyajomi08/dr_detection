import React from 'react'
import Card from '../components/dashboard/PatientCard';
import List from '../components/dashboard/PatientList';


const Dashboard=()=>{
    return (
        <div>
            <div className="ui three column grid">
                <Card title="Appointments" progressBarColor="ui green inverted progress" />
                <Card title="Completed" progressBarColor="ui yellow inverted progress" />
                <Card title="Pending Result" progressBarColor="ui blue inverted progress" />
            </div>
            <List />
        </div>
    );
};

export default Dashboard;   
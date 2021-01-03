import React from 'react'
import Card from '../components/dashboard/PrescriptionCard';
import List from '../components/dashboard/PrescriptionList';


const Dashboard=()=>{
    return (
        <div>
            <div className="ui three column grid">
                <Card title="Total Appointment" progressBarColor="ui green inverted progress" />
                <Card title="Completed Appointment" progressBarColor="ui yellow inverted progress" />
                <Card title="Pending Result" progressBarColor="ui blue inverted progress" />
            </div>
            <List />
        </div>
    );
};

export default Dashboard;   
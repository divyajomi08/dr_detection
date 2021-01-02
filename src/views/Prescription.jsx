import React from 'react';
import Card from '../components/PrescriptionCard';
import List from '../components/PrescriptionList';

const Prescription = () => {
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
}

export default Prescription;
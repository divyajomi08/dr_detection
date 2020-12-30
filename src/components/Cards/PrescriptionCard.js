import React from "react"
import Card from './Card'

const PrescriptionCard = () => {
    return (
        <div className="ui three column grid">
            <Card title="Total Appointment" progressBarColor="ui green inverted progress" />
            <Card title="Completed Appointment" progressBarColor="ui yellow inverted progress" />
            <Card title="Pending Result" progressBarColor="ui blue inverted progress" />
        </div>
    );
};

export default PrescriptionCard;
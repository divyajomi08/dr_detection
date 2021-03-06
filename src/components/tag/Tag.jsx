import React, { useState } from 'react';
import Imagecard from './Image';
import DarkButton from '../DarkButton';

const Tag = () => {
    const [patient,setPatient]=useState("");
    return (
        <div className="ui form">
            <div className="field">
                <div className="ui left icon input">
                    <input type="text" onChange={(event)=>setPatient(event.target.value)} placeholder="Search Patient..."></input>
                    <i className="users icon"></i>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="field">
                {patient==="285467" ? <Imagecard /> : null}

            </div>
            <br>
            </br>
            <br></br>
            <div className="two fields">
                <div className="four wide field">
                    <h2>Severity:</h2>
                </div>
                <div className="four wide field">
                    <select className="ui fluid dropdown">
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                        <option value="0">0</option>
                    </select>
                </div>
            </div>
            <br></br>
            <div className="field">
                <DarkButton text="Submit"></DarkButton>
            </div>
        </div >
    );
};
export default Tag;
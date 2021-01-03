import React from 'react';
import Image from './Imagecard';
import { Result } from 'antd';

const Form = () => {
    return (
        <div>
        <div class="ui grid">
            <div className="row"></div>
            <h2 className="ui horizontal divider">Analysis Results</h2>
            <div className="row">
                <div className="six wide column">
                    <div className="sub header">Name</div>
                    <div className="ui segment">John Mayer</div>
                </div>
                <div className="six wide column">
                    <div className="sub header">Patient ID</div>
                    <div className="ui segment">278329</div>
                </div>
            </div>
            <div className="sub header">Images</div>
            <div className='row'>
                <Image />
            </div>
            <div className='row'>
                <div className="six wide column">
                    <div className="sub header">Result</div>
                    <div className="ui segment">Positive</div>
                </div>
            </div>
        </div>
        <div className="ui form">
            <div className='row'>
                <br></br>
                <div className="sub header">Observation</div>
                <br></br>
                <div class="ui form">
                    <div class="field">
                        <textarea></textarea>
                    </div>
                </div>

            </div>
            <div className='row'>
                <br></br>
                <div className="sub header">Prescription</div>
                <br></br>
                <div class="ui form">
                    <div class="field">
                        <textarea></textarea>
                    </div>
                </div>

            </div>
            <div className='row'>
                <br></br>
                <div class="ui button" tabindex="0">Submit</div>
            </div>
        </div>
        </div>
    );
};
export default Form;
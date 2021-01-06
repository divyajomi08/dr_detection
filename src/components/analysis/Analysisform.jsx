import React from 'react';
import Image from './Imagecard';
import { Result } from 'antd';
import DarkButton from '../DarkButton';

const Form = () => {
    return (
        <div>
        <div className="ui grid">
            <div className="row"></div>
            <h2 className="ui horizontal divider">Analysis Results</h2>
            <div className="row">
                <div className="six wide column">
                    <div className="sub header">Name</div>
                    <div className="ui segment">John Lilki</div>
                </div>
                <div className="six wide column">
                    <div className="sub header">Patient ID</div>
                    <div className="ui segment">285467</div>
                </div>
            </div>
            <div className="sub header">Images</div>
            <div className='row'>
                <Image />
            </div>
            <div className='row'>
                <div className="six wide column">
                    <div className="sub header">Result</div>
                    <div className="ui green inverted segment">Positive</div>
                </div>
            </div>
        </div>
        <div className="ui form">
            <div className='row'>
                <br></br>
                <div className="sub header">Observation</div>
                <br></br>
                <div className="ui form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                </div>

            </div>
            <div className='row'>
                <br></br>
                <div className="sub header">Prescription</div>
                <br></br>
                <div className="ui form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                </div>

            </div>
            <div className='row'>
                <br></br>
                <div className="ui button" tabindex="0">Submit</div>
            </div>
        </div>
        </div>
    );
};
export default Form;
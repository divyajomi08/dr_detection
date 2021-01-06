import React from 'react';
import Imagecard from './Image';
import DarkButton from '../DarkButton';

const Tag = () => {
    return (
        <div className="ui centered grid">
            <div className="row">
                <div class="ui left icon input">
                    <input type="text" placeholder="Search Patient..."></input>
                    <i class="users icon"></i>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <Imagecard />
            </div>
            <br>
            </br>
            <br></br>
            <div className="row">
                <div className="one wide column">
                    <h2>Severity:</h2>
                </div>
                <div className="three wide column">
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
        <div className="row">
            <DarkButton text="Submit"></DarkButton>
        </div> 
        </div >
    );
};
export default Tag;
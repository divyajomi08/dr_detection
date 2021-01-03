import React from 'react';
import DarkButton from '../DarkButton';

const Card = (props) => {
    return (
        <div className="column">
            <div className="ui card">
                <div className="content">
                    <div className="header">{props.title}</div>
                </div>
                <div className="content">
                    <div className="ui active progress">
                        <div className={props.progressBarColor}>
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                    <div className="extra content">
                        <DarkButton text="Update"></DarkButton>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Card;
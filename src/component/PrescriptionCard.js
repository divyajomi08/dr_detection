import React from "react";

const PrescriptionCard = () => {
    return (
        <div class="ui three column grid">
            <div class="column">
            <div class="ui card">
                <div class="content">
                    <div class="header">Total Appointment       </div>
                </div>
                <div class="content">
                    <div class="ui active progress">
                        <div class="ui green inverted progress">
                            <div class="bar">
                                <div class="progress"></div>
                            </div>
                        </div>
                    </div>
                    <div class="extra content">
                        <button class="ui button">Update</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
            <div class="ui card">
                <div class="content">
                    <div class="header">Completed Appointment</div>
                </div>
                <div class="content">
                    <div class="ui active progress">
                        <div class="ui yellow inverted progress">
                            <div class="bar">
                                <div class="progress"></div>
                            </div>
                        </div>
                    </div>
                    <div class="extra content">
                        <button class="ui button">Update</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
                <div class="ui card">
                    <div class="content">
                        <div class="header">Pending Result      </div>
                    </div>
                    <div class="content">
                        <div class="ui active progress">
                            <div class="ui blue inverted progress">
                                <div class="bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                        </div>
                        <div class="extra content">
                            <button class="ui button">Update</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};
export default PrescriptionCard;
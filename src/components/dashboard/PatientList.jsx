import React from 'react';
import { Link } from 'react-router-dom';

const PrescriptionList = () => {
    return (
        <table className="ui compact celled definition table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Check</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>285467</td>
                    <Link to="/patient/285467">
                        <td>John Lilki</td>
                    </Link>
                    <td className="collapsing">
                        <div className="ui checkbox">
                            <input type="checkbox"></input> <label></label>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    );
};

export default PrescriptionList;
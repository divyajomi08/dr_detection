import React from 'react';

const PrescriptionList = () => {
    return (
        <table class="ui compact celled definition table">
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
                    <td>John Lilki</td>
                    <td class="collapsing">
                        <div class="ui checkbox">
                            <input type="checkbox"></input> <label></label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default PrescriptionList;
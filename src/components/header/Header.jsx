import React from 'react';

const HeaderView = () => {
    return (
        <div class="ui secondary menu">
            
            <a  className="ui item">
                Profile
            </a>
            <div className="right menu">
                <a className="ui item">
                    Logout
                </a>
            </div>
        </div>
    );
};
export default HeaderView;
import React from 'react';

const HeaderView = () => {
    return (
        <div class="ui secondary pointing menu">
            
            <a class="item">
                Profile
            </a>
            <div class="right menu">
                <a class="ui item active">
                    Logout
                </a>
            </div>
        </div>
    );
};
export default HeaderView;
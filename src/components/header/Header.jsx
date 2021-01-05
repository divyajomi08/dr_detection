import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderView = () => {
    const [profile, setProfile] = useState("item");
    const [logout, setlogout] = useState("ui item");

    return (
        <div className="ui secondary menu" >
            <img class="ui image" alt="Logo"  style={{ marginLeft:10,width: 60, height: 60 }} src="https://play-lh.googleusercontent.com/83gl9FJDgo-bOdKb5hteRVWxCK_6ZKkAMPJCWxMwPsO1SHbiWvqvwgPwmHfUuyzpMQ=s180-rw"></img>
            <div className="right menu" >
                <div class="item">
                    <a className={profile} onClick={() => { setProfile("ui item active"); setlogout("item"); }}>
                        <Link to="/profile">Profile</Link>
                    </a>
                </div>
                <div className="item" onClick={() => { setProfile("item"); setlogout("ui item active"); }}>
                    <a className={logout} >
                    <Link to="/logout">Logout</Link>
                    </a>
                </div>
            </div>

        </div>
    );
};
export default HeaderView;